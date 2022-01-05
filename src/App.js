import React, {useState} from "react";
import ResultCommon from "./components/resultCommon";
import ResultSeparated from "./components/resultSeparated";
import InputCommon from "./components/inputCommon";
import InputSeparated from "./components/inputSeparated";
import Options from "./components/options";
import {nanoid} from "nanoid";
import './App.css';

function App() {

    const [value, setValue] = useState({
        sum: 0,
        numberOfPeople: 0,
        percent: 0,
        delivery: 0,
    });

    const [valueResult, setResult] = useState(0);

    const [radioBtn, setRadioBtn] = useState(true);

    const [people, setPeople] = useState([
        {name: "name", price: 0, id: nanoid()},
        {name: "name", price: 0, id: nanoid()},
    ]);

    const radioBoolean = function () {
        setRadioBtn(!radioBtn);
        setValue({
            sum: 0,
            numberOfPeople: 0,
            percent: 0,
            delivery: 0,
        });
        setResult(0);
    };

    const addPerson = () => {
        setPeople([...people, {name: "name", price: 0, id: nanoid()}]);
    };

    const commonPayment = () => {
        const result = Math.round((value.sum + (value.sum / 100 * value.percent) + value.delivery) / value.numberOfPeople);
        setResult(result);
    };

    // const separatedPayment = () => {
    //     people.map((person, index) => {
    //         return
    //     })
    // };

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const id = e.target.id;
        setPeople(prevState => {
            const elem = prevState[id];
            elem[name] = value;
            prevState[id] = elem;
            return [...prevState]
        });
    };

    const deleteInput = (e) => {
        const id = e.target.id;
        setPeople(prevState => {
            prevState.splice(id, 1);
            return [...prevState]
        });
    };

    const changeValues = (e) => {
        const name = e.target.name;
        const value = Number(e.target.value);
        setValue(prevState => {
            return {...prevState, [name]: value}
        });
    };

    const inputField = () => {
        if (radioBtn) {
            return (
                <ResultCommon result={valueResult} people={value.numberOfPeople}/>
            )
        } else {
            return (
                <ResultSeparated value={value} people={people}/>
            )
        }
    };

    const result = () => {
        if (radioBtn) {
            return (
                <InputCommon result={() => commonPayment()} value={value} change={(e) => changeValues(e)}/>
            )
        } else {
            return (
                <InputSeparated delete={(e) => deleteInput(e)} changeVal={(e) => changeValues(e)} value={value}
                                change={(e) => inputChangeHandler(e)} add={() => addPerson()} people={people}/>
            )
        }
    };

    return (
        <div className="container">

            <Options radioBtn={radioBtn} setBoolean={() => {
                radioBoolean()
            }}/>

            {result()}

            {inputField()}

        </div>
    );
}


export default App;
