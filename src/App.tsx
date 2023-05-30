import {useState} from 'react';
import './App.css';
import EffectComponent from './EffectComponent';
import Mode from './Mode';

import SubComponent from './SubComponent';



interface Feature1 {
    msg: string
}

interface Feature2 {
    count: number
}

interface ModeFeature {
    mode: Mode
}


function defaultFeature1(): Feature1 {
    return { msg: "" }
}

function defaultFeature2(): Feature2 {
    return { count: 0 }
}

function defaultModeFeature(): ModeFeature {
    return { mode: Mode.Refer }
}


type Model = Feature1
           & Feature2
           & ModeFeature
           ;

function useModel(origin: Model): [Model, (model: Model) => void] {
    const [model, setModel] = useState<Model>(origin)
    return [model, setModel]
}


function App() {

    const [model, setModel] = useModel({
        ...defaultFeature1(),
        ...defaultFeature2(),
        ...defaultModeFeature()
    })

    const [model2, setModel2] = useModel({
        ...defaultFeature1(),
        ...defaultFeature2(),
        mode: Mode.Edit
    })

    const E1Handler: (sender: string) => void = (sender: string) => {
        console.log(`called from ${sender}`)
        setModel({
            ...model,
            mode: model.mode === Mode.Refer? Mode.Edit : Mode.Refer,
        })
    }

    return (
        <div className="App">
            <SubComponent v={model} f={setModel}/>
            <SubComponent v={model2} f={setModel2}/>
            <EffectComponent handler={E1Handler} />
        </div>
    );
}

export default App;
