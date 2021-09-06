import React from 'react';
import {Story} from '@storybook/react';

import {Rating, RatingPropsType} from "./Rating";

export default {
    title: 'components/Rating',
    component: Rating,
}

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>

export const EmptyStars = Template.bind({})
EmptyStars.args = {
    value: 0,
    onClick: x=>x
}




