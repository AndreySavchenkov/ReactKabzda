import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";




export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');

export const Collapsed = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UnCollapsed = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callback}/>



export const ModeChanging = () => {
    const [value, setValue]=useState<boolean>(true);
    return <Accordion titleValue={'Changing Accordion'} collapsed={value} onChange={()=>setValue(!value)}/>
}



