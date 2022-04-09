import React from 'react';
import { Accordion } from 'components/Accordion';

const title = 'Accordions have pianos';
const children = 'Hello';

export default {
  title: 'Components/Accordion',
};

export const Default = () => (
  <Accordion id="some_id" title={title}>
    {children}
  </Accordion>
);

Default.storyName = 'Default size and style';

Default.parameters = {
  backgrounds: { default: 'mulberry' },
};

export const DefaultLarge = () => (
  <Accordion id="some_id" title={title} large>
    {children}
  </Accordion>
);

DefaultLarge.storyName = 'Default style and large size';

DefaultLarge.parameters = {
  backgrounds: { default: 'mulberry' },
};

export const DefaultDark = () => (
  <Accordion id="some_id" title={title} dark>
    {children}
  </Accordion>
);

DefaultDark.storyName = 'Default size and dark style';

export const LargeDark = () => (
  <Accordion id="some_id" title={title} large dark>
    {children}
  </Accordion>
);

LargeDark.storyName = 'Large size and dark style';
