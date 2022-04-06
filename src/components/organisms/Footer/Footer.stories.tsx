import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Footercomponent from './Footer';
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Organisms',
    component: Footercomponent,
} as ComponentMeta<typeof Footercomponent>;
export const Footer = () => <Footercomponent />
