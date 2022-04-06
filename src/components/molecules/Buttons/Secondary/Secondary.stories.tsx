import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Button from './Secondary';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Molecules/Buttons',
    component: Button,
} as ComponentMeta<typeof Button>;
export const Secondary = () => <Button label={'+ Add to Library'} onClickHandler={function (arg1: any): void {
    throw new Error('Function not implemented.');
}} />;
