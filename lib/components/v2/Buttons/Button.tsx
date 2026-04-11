import { KEY } from '@common/keys';
import { type BooleanLike, classes } from '@common/react';
import { computeBoxClassName, computeBoxProps } from '@common/ui';
import type { Placement } from '@floating-ui/react';
import type { ReactNode } from 'react';
import type { BoxProps } from './../../Box';
import { Icon, type IconProps } from './../../Icon';
import { Tooltip } from './../../Tooltip';

type Props = Partial<{
  /** Captures keyboard events */
  captureKeys: boolean;
  /** Fill all available horizontal space */
  fluid: boolean;
  /** Makes the button circular, with fixed ratio size 1:1 */
  circular: boolean;
  /** Disables button and makes it semi-transparent */
  disabled: BooleanLike;
  /** Activates the button (gives it a green color) */
  selected: BooleanLike;
  /** Adds an left side icon to the button */
  leadingIcon: IconProps;
  /** Adds an right side icon to the button */
  trailingIcon: IconProps;
  /** A fancy, boxy tooltip, which appears when hovering over the button */
  tooltip: ButtonTooltip;
  /** Called when element is clicked */
  onClick: (event: any) => void;
}> &
  BoxProps;

type ButtonTooltip = {
  /** Content of the tooltip. Can be a string or a node */
  content: ReactNode;
  /** Position of the tooltip. Does not guarantee the position is respected. */
  position: Placement;
};

/**
 * Base Button component.
 * If you add something here, all buttons will have it.
 *
 * For button specific features, go to propper component.
 */
export function Button(props: Props) {
  const {
    children,
    captureKeys,
    fluid,
    color,
    className,
    circular,
    disabled,
    selected,
    leadingIcon,
    trailingIcon,
    tooltip,
    onClick,
    ...rest
  } = props;

  let finalButton = (
    <button
      className={classes([
        'button',
        fluid && 'fluid',
        color && color,
        disabled && 'disabled',
        selected && 'selected',
        circular && 'circular',
        className,
        computeBoxClassName(rest),
      ])}
      onClick={(event) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      }}
      onKeyDown={(event) => {
        if (!captureKeys) {
          return;
        }

        // Simulate a click when pressing space or enter.
        if (event.key === KEY.Space || event.key === KEY.Enter) {
          event.preventDefault();
          if (!disabled && onClick) {
            onClick(event);
          }
          return;
        }
      }}
      {...computeBoxProps(rest)}
    >
      {leadingIcon && <Icon {...leadingIcon} />}
      {children && <div className="content">{children}</div>}
      {trailingIcon && <Icon {...trailingIcon} />}
    </button>
  );

  if (tooltip) {
    finalButton = (
      <Tooltip
        content={tooltip.content}
        position={tooltip.position as Placement}
      >
        {finalButton}
      </Tooltip>
    );
  }

  return finalButton;
}
