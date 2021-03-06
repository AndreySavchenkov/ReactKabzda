import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'Rating',
    component: UncontrolledRating,
}

export const EmptyStars = () => <UncontrolledRating defaultValue={0} />;
export const Rating1 = () => <UncontrolledRating defaultValue={1} />;
export const Rating2 = () => <UncontrolledRating defaultValue={2} />;
export const Rating3 = () => <UncontrolledRating defaultValue={3} />;
export const Rating4 = () => <UncontrolledRating defaultValue={4} />;
export const Rating5 = () => <UncontrolledRating defaultValue={5} />;
