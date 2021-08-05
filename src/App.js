import {useState} from "react";
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

    const [radioBtn, setRadioBtn] = useState(true);

    const [people, setPeople] = useState([
        {name: "dikaprio", price: "222", id: nanoid()}
    ]);

    const radioBoolean = function () {
        setRadioBtn(!radioBtn)
        console.log(radioBtn)
    };

    const addPerson = () => {
        setPeople(...people, {name: '', price: '', id: nanoid()})
    }

    const changePersonField = (id, name, value) => {
        setPeople(people => {
            return people.map(person => {
                if (person.id === id) {
                    return {...person, [name]: value}
                }
                return person
            });
        });
    };

    const inputField = () => {
        if (radioBtn) {
            return (
                <ResultCommon/>
            )
        } else {
            return (
                <ResultSeparated/>
            )
        }
    }

    const result = () => {
        if (radioBtn) {
            return (
                <InputCommon/>
            )
        } else {
            return (
                <InputSeparated add={() => addPerson()} people={people}/>
            )
        }
    }

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
