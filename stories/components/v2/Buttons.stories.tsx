import { COMPONENT_COLORS } from '@common/constants';
import { Button } from '@components/v2';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Button>;

export default {
  component: Button,
  title: 'Components v2/Buttons',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    return (
      <Button
        fluid
        selected
        leadingIcon={{ name: 'xmark' }}
        trailingIcon={{ name: 'xmark' }}
      >
        Button Button
      </Button>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <div>
      {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
        (color) => (
          <Button key={color} color={color}>
            {color}
          </Button>
        ),
      )}
    </div>
  ),
};
