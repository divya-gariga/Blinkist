import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Header from './Banner';
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Organisms',
    component: Header,
} as ComponentMeta<typeof Header>;
export const Banner = () => <Header />
