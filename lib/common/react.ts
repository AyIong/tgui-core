/**
 * Helper for conditionally adding/removing classes in React
 */
export function classes(classNames: (string | BooleanLike)[]): string {
  let className = '';
  for (let i = 0; i < classNames.length; i++) {
    const part = classNames[i];
    if (typeof part === 'string') {
      className += `${part} `;
    }
  }
  return className;
}

/**
 * Normalizes children prop, so that it is always an array of VDom
 * elements.
 */
export function normalizeChildren<T>(children: T | T[]): T[] {
  if (Array.isArray(children)) {
    return children.flat().filter((value) => value) as T[];
  }
  if (typeof children === 'object') {
    return [children];
  }
  return [];
}

/**
 * Shallowly checks if two objects are different.
 * Credit: https://github.com/developit/preact-compat
 */
export function shallowDiffers(
  a: Record<string, any>,
  b: Record<string, any>,
): boolean {
  let i: string;
  for (i in a) {
    if (!(i in b)) {
      return true;
    }
  }
  for (i in b) {
    if (a[i] !== b[i]) {
      return true;
    }
  }
  return false;
}

/**
 * A common case in tgui, when you pass a value conditionally, these are
 * the types that can fall through the condition.
 */
export type BooleanLike = number | boolean | null | undefined;

/**
 * A helper to determine whether the object is renderable by React.
 */
export function canRender(value: unknown): boolean {
  return value !== undefined && value !== null && typeof value !== 'boolean';
}
