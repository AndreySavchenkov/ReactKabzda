import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


export const App = (props: any) => {
    console.log('App rendering')
    return (
        <div className={'app'}>
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledRating/>
            <Rating value={3}/>
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







