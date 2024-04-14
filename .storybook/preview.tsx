import type { Preview } from "@storybook/react";

import { Pretendard } from '@/app/font';
import '@/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => (
      <div style={Pretendard.style}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
