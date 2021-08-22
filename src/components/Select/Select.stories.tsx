import React, {useState} from 'react';
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select,
}

export const WithValue: Story<SelectPropsType> = (args) => {

    const [value, setValue] = useState('2')

    return (
        <>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Grodno'},
                    {value: '3', title: 'Lodz'}
                ]}
            />
        </>
    )
}


// export const WithoutValue: Story<SelectPropsType> = (args) => {
//
//     const [value, setValue] = useState(null)
//
//     return (
//         <>
//             <Select
//                 onChange={setValue}
//                 value={value}
//                 items={[
//                     {value: '1', title: 'Minsk'},
//                     {value: '2', title: 'Grodno'},
//                     {value: '1', title: 'Lodz'}
//                 ]}
//             />
//         </>
//     )
//
// }


