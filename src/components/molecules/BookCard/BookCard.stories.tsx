import React from 'react';

import { ComponentMeta } from '@storybook/react';

import BookCardReader from './BookCards';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Molecules',
    component: BookCardReader,
} as ComponentMeta<typeof BookCardReader>;
export const BookCard = () => <BookCardReader img={'assets/beingboss.png'} title={'Being Boss'}
    author={'Kathleen Shannon and Emily'} readTime={'13-minutes read'} />
