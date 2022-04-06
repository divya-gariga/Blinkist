import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Dropdown from './ExploreDropdown';
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Organisms',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;
export const ExtendedDropdown = () => <Dropdown />
