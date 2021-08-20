import React from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

export const WithValue: Story<SelectPropsType> = (args) =>
    <>
        <Select
            onChange={action('value changed')}

            value={'2'}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Grodno'},
                {value: '3', title: 'Lodz'}
            ]}
        />
    </>

export const WithoutValue: Story<SelectPropsType> = (args) =>
    <>
        <Select
            onChange={action('value changed')}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Grodno'},
                {value: '1', title: 'Lodz'}
            ]}
        />
    </>



