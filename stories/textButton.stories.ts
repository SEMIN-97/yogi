import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import TextButton from '@/app/ui/atoms/textButton';

const meta = {
  title: 'Atoms/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: '사용할 Google Icon을 입력해주세요 <br>예) Search'
    },
    iconPos: {
      description: 'Icon에 값이 있는 경우에만 유효합니다'
    }
  },
  args: {
    label: '더 보기',
    variant: 'primary',
    size: 'medium',
    onClick: fn()
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  }
};

export const Plain: Story = {
  args: {
    variant: 'plain',
  },
};

export const Icon: Story = {
  args: {
    icon: 'expand_more',
    iconPos: 'right'
  }
};

export const Medium: Story = {
  args: {
    size: 'medium'
  }
};

export const Small: Story = {
  args: {
    size: 'small'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
