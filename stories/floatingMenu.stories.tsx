import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import FloatingMenu from '@/ui/molecules/floatingMenu';

const meta = {
  title: 'Molecules/FloatingMenu',
  component: FloatingMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '150px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FloatingMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menus: [
      {
        label: 'item 1',
        onClick: fn(),
      },
      {
        label: 'item 2',
        onClick: fn(),
      },
      {
        label: 'item 3',
        onClick: fn(),
      },
    ],
  },
};

export const Link: Story = {
  args: {
    menus: [
      {
        label: 'link 1',
        link: {
          href: '/example',
        },
        onClick: fn(),
      },
      {
        label: 'link 2',
        link: {
          href: '/example',
        },
      },
    ],
  },
};

export const Active: Story = {
  args: {
    menus: [
      {
        label: 'item 1',
        active: true,
        onClick: fn(),
      },
      {
        label: 'item 2',
        active: false,
        onClick: fn(),
      },
      {
        label: 'item 3',
        active: false,
        onClick: fn(),
      },
    ],
  },
};
