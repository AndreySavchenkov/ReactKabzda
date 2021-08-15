import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

import {Rating, RatingPropsType, RatingValueType} from "./Rating";

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




