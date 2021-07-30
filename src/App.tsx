import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


export const App = (props: any) => {
    console.log('App rendering')
    return (
        <div>

            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

        </div>

    );
}

type PageTitlePropsType = {
    title: string
}

export const PageTitle = (props: PageTitlePropsType) => {

    console.log('AppTitle rendering')
    return (
        <div>{props.title}</div>
    )
}







