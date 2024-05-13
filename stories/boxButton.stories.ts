import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import BoxButton from '@/ui/atoms/boxButton';

const meta = {
  title: 'Atoms/BoxButton',
  component: BoxButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: '사용할 Google Icon을 입력해주세요 <br>예) Search',
    },
    iconPos: {
      description: 'Icon에 값이 있는 경우에만 유효합니다',
    },
  },
  args: {
    label: '검색',
    variant: 'primary',
    size: 'medium',
    onClick: fn(),
  },
} satisfies Meta<typeof BoxButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Plain: Story = {
  args: {
    variant: 'plain',
  },
};

export const Icon: Story = {
  args: {
    icon: 'Search',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
