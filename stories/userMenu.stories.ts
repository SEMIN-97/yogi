import type { Meta, StoryObj } from '@storybook/react';

import UserMenu from '@/ui/organisms/userMenu';

const meta = {
  title: 'Organisms/UserMenu',
  component: UserMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = { };
