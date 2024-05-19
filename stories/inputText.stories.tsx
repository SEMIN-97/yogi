import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Controller, useForm } from 'react-hook-form';

import { getErrorMessage } from '@/helpers/ValidationHelper';
import InputText, { InputTextProps } from '@/ui/atoms/inputText';

const meta = {
  title: 'Atoms/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: '이름',
    name: 'name',
    value: '',
    placeholder: '이름을 입력해주세요',
    onChange: fn(),
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputTextWithHooks = ({
  error,
  isRequired,
  label,
  name,
  placeholder,
  value,
}: InputTextProps) => {
  const { control, formState: { errors }} = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
    },
  });

  return (
    <Controller
      name="name"
      control={control}
      {...(isRequired &&  { rules: { required: '이름을 입력해주세요.' } })}
      render={({ field }) => (
        <InputText
          label={label}
          placeholder={placeholder}
          isRequired={isRequired}
          error={error || getErrorMessage(errors.name)}
          {...field}
        />
      )}
    >
    </Controller>
  );
};

export const Default: Story = {
  render: (args) => <InputTextWithHooks {...args} />,
};

export const Required: Story = {
  args: {
    isRequired: true,
  },
  render: (args) => <InputTextWithHooks {...args} />,
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const Error: Story = {
  args: {
    isRequired: true,
  },
  render: (args) => <InputTextWithHooks {...args} />,
};
