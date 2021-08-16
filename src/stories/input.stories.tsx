import React, {useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(event) => {
        setValue(event.currentTarget.value)
    }}/> -{value}-</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        actual value: {value}
    </div>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={
        (e) => {
            setParentValue(e.currentTarget.value)
        }
    }/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    return <input type='checkbox' checked={parentValue} onChange={
        (e) => {
            setParentValue(e.currentTarget.checked)
        }
    }/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    return <select value={parentValue} onChange={(e)=>{setParentValue(e.currentTarget.value)}}>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Snt.Petersburg</option>
    </select>
}


export const ControlledInputWithFixesValue = () => <input value={'blablatest'}/>;



