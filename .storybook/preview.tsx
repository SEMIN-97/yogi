import type { Preview } from "@storybook/react";

import { Pretendard } from '@/font';
import '@/globals.scss';

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
