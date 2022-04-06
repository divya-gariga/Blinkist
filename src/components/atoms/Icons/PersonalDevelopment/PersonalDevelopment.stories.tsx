//  MyComponent.stories.ts|tsx

import React from 'react';
import { Meta } from '@storybook/react';
import imageFile from './PersonalDevelopment.svg'

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'atoms/icons',
} as Meta;

const image = {
    src: imageFile,
    alt: 'my image',
};

export const PersonalDevelopment = () => <img src={image.src} alt={image.alt} />;