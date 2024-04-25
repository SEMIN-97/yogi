import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import RoundButton from '@/app/ui/atoms/roundButton';

const meta = {
  title: 'Atoms/RoundButton',
  component: RoundButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: '사용할 Google Icon을 입력해주세요 <br>예) Search',
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    icon: 'close',
  },
};

export const Label: Story = {
  args: {
    label: '1',
  },
};

export const Outlined: Story = {
  args: {
    outlined: true,
  },
};

export const Medium: Story = {
  args: {
    icon: 'close',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    icon: 'close',
    size: 'small',
  },
};

export const Active: Story = {
  args: {
    icon: 'close',
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    icon: 'close',
    disabled: true,
  },
};
