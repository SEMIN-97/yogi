import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Checkbox from '@/app/ui/atoms/checkbox';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: '체크박스',
    onChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const CheckboxWithHooks = ({
  checked,
  disabled,
  label,
  value,
}: any) => {
  const [checkedState, setCheckedState] = useState(checked);

  const onChange = (value: boolean) => {
    setCheckedState(value);
  };

  return <Checkbox
    checked={checkedState}
    disabled={disabled}
    label={label}
    onChange={onChange}
    value={value}
  />;
};

export const Unchecked: Story = {
  args: {
    checked: false,
  },
  render: (args) => <CheckboxWithHooks {...args} />,
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => <CheckboxWithHooks {...args} />,
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
  render: (args) => <CheckboxWithHooks {...args} />,
};
