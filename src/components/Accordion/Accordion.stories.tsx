import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";




export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');
const onClickCallBack = action('some item was clicked');

export const Collapsed = () => <Accordion items={[]} titleValue={'Menu'} collapsed={true} onChange={callback} onClick={onClickCallBack}/>
export const UnCollapsed = () => <Accordion items={[{title: 'Andrew', value: 1}, {title: 'Irina', value: 2}]} titleValue={'Menu'} collapsed={false} onChange={callback} onClick={onClickCallBack}/>



export const ModeChanging = () => {
    const [value, setValue]=useState<boolean>(true);
    return <Accordion items={[{title: 'Andrew', value: 1}, {title: 'Irina', value: 2}]}
                      titleValue={'Changing Accordion'}
                      collapsed={value}
                      onChange={()=>setValue(!value)}
                      onClick={(id)=> alert(`user by ID: ${id} should be happy!`)}/>
}



