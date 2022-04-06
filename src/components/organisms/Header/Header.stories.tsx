import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Headercomponent from './Header';
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Organisms',
    component: Headercomponent,
} as ComponentMeta<typeof Headercomponent>;
export const Header = () => <Headercomponent />
