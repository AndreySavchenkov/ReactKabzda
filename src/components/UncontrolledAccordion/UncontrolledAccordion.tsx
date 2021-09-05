import React, {useReducer, useState} from "react";


type AccordionPropsType = {
    titleValue: string,
}

type ActionType = {
    type: string
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

const reducer = (state: boolean, action:ActionType) => {
    switch(action.type) {
        case TOGGLE_CONSTANT:
            return !state;
            default:
                throw new Error('Bad action type')
    }
    return state;

}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')

    //let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer, false);

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={()=> {dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
            { !collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>{props.onClick()}}>---{props.title}---</h3>
    )
}




export const AccordionBody = () => {
    console.log('AccordionBody rendering')

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}