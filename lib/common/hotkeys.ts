import { globalEvents, KeyEvent } from './events';
import * as keycodes from './keycodes';

// BYOND macros, in `key: command` format.
const byondMacros: Record<string, string> = {};

// Default set of acquired keys, which will not be sent to BYOND.
const hotKeysAcquired = [
  keycodes.KEY_ESCAPE,
  keycodes.KEY_ENTER,
  keycodes.KEY_SPACE,
  keycodes.KEY_TAB,
  keycodes.KEY_CTRL,
  keycodes.KEY_SHIFT,
  keycodes.KEY_UP,
  keycodes.KEY_DOWN,
  keycodes.KEY_LEFT,
  keycodes.KEY_RIGHT,
  keycodes.KEY_F5,
];

// State of passed-through keys.
const keyState: Record<string, boolean> = {};

// Custom listeners for key events
const keyListeners: ((key: KeyEvent) => void)[] = [];

/**
 * Converts a browser keycode to BYOND keycode.
 */
function keyCodeToByond(keyCode: number) {
  if (keyCode === 16) return 'Shift';
  if (keyCode === 17) return 'Ctrl';
  if (keyCode === 18) return 'Alt';
  if (keyCode === 33) return 'Northeast';
  if (keyCode === 34) return 'Southeast';
  if (keyCode === 35) return 'Southwest';
  if (keyCode === 36) return 'Northwest';
  if (keyCode === 37) return 'West';
  if (keyCode === 38) return 'North';
  if (keyCode === 39) return 'East';
  if (keyCode === 40) return 'South';
  if (keyCode === 45) return 'Insert';
  if (keyCode === 46) return 'Delete';

  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90)) {
    return String.fromCharCode(keyCode);
  }
  if (keyCode >= 96 && keyCode <= 105) {
    return 'Numpad' + (keyCode - 96);
  }
  if (keyCode >= 112 && keyCode <= 123) {
    return 'F' + (keyCode - 111);
  }
  if (keyCode === 188) return ',';
  if (keyCode === 189) return '-';
  if (keyCode === 190) return '.';
}

/**
 * Keyboard passthrough logic. This allows you to keep doing things
 * in game while the browser window is focused.
 */
function handlePassthrough(key: KeyEvent) {
  const keyString = String(key);
  // In addition to F5, support reloading with Ctrl+R and Ctrl+F5
  if (keyString === 'Ctrl+F5' || keyString === 'Ctrl+R') {
    location.reload();
    return;
  }
  // Prevent passthrough on Ctrl+F
  if (keyString === 'Ctrl+F') {
    return;
  }
  // NOTE: Alt modifier is pretty bad and sticky in IE11.

  if (
    key.event.defaultPrevented ||
    key.isModifierKey() ||
    hotKeysAcquired.includes(key.code)
  ) {
    return;
  }
  const byondKeyCode = keyCodeToByond(key.code);
  if (!byondKeyCode) {
    return;
  }
  // Macro
  const macro = byondMacros[byondKeyCode];
  if (macro) {
    return Byond.command(macro);
  }
  // KeyDown
  if (key.isDown() && !keyState[byondKeyCode]) {
    keyState[byondKeyCode] = true;
    const command = `KeyDown "${byondKeyCode}"`;
    return Byond.command(command);
  }
  // KeyUp
  if (key.isUp() && keyState[byondKeyCode]) {
    keyState[byondKeyCode] = false;
    const command = `KeyUp "${byondKeyCode}"`;
    return Byond.command(command);
  }
}

/**
 * Acquires a lock on the hotkey, which prevents it from being
 * passed through to BYOND.
 */
export function acquireHotKey(keyCode: number) {
  hotKeysAcquired.push(keyCode);
}

/**
 * Makes the hotkey available to BYOND again.
 */
export function releaseHotKey(keyCode: number) {
  const index = hotKeysAcquired.indexOf(keyCode);
  if (index >= 0) {
    hotKeysAcquired.splice(index, 1);
  }
}

export function releaseHeldKeys() {
  for (const byondKeyCode of Object.keys(keyState)) {
    if (keyState[byondKeyCode]) {
      keyState[byondKeyCode] = false;
      Byond.command(`KeyUp "${byondKeyCode}"`);
    }
  }
}

type ByondSkinMacro = {
  command: string;
  name: string;
};

export function setupHotKeys() {
  // Read macros
  Byond.winget('default.*').then((data: Record<string, string>) => {
    // Group each macro by ref
    const groupedByRef: Record<string, ByondSkinMacro> = {};
    for (const key of Object.keys(data)) {
      const keyPath = key.split('.');
      const ref = keyPath[1];
      const prop = keyPath[2];
      if (ref && prop) {
        // This piece of code imperatively adds each property to a
        // ByondSkinMacro object in the order we meet it, which is hard
        // to express safely in typescript.
        if (!groupedByRef[ref]) {
          groupedByRef[ref] = {} as any;
        }
        groupedByRef[ref][prop] = data[key];
      }
    }
    // Insert macros
    const escapedQuotRegex = /\\"/g;

    function unescape(str: string) {
      return str.substring(1, str.length - 1).replace(escapedQuotRegex, '"');
    }

    for (const ref of Object.keys(groupedByRef)) {
      const macro = groupedByRef[ref];
      const byondKeyName = unescape(macro.name);
      byondMacros[byondKeyName] = unescape(macro.command);
    }
  });
  // Setup event handlers
  globalEvents.on('window-blur', () => {
    releaseHeldKeys();
  });
  globalEvents.on('key', (key: KeyEvent) => {
    for (const keyListener of keyListeners) {
      keyListener(key);
    }
    handlePassthrough(key);
  });
}

/**
 * Registers for any key events, such as key down or key up.
 * This should be preferred over directly connecting to keydown/keyup
 * as it lets tgui prevent the key from reaching BYOND.
 *
 * If using in a component, prefer KeyListener, which automatically handles
 * stopping listening when unmounting.
 *
 * @param callback The function to call whenever a key event occurs
 * @returns A callback to stop listening
 */
export function listenForKeyEvents(callback: (key: KeyEvent) => void) {
  keyListeners.push(callback);

  let removed = false;

  return () => {
    if (removed) {
      return;
    }

    removed = true;
    keyListeners.splice(keyListeners.indexOf(callback), 1);
  };
}