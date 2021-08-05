import {useState} from "react";
import ResultCommon from "./components/resultCommon";
import ResultSeparated from "./components/resultSeparated";
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

    const [people, setPeople] = useState([]);

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
                <ResultCommon/>
            )
        } else {
            return (
                <ResultSeparated/>
            )
        }
    }

    return (
        <div className="container">

            <Options radioBtn={radioBtn} setBoolean={() => {
                radioBoolean()
            }}/>

            <form className="calc">
                <div className="inputs">
                    <div>
                        <label htmlFor="humans">Человек:</label>
                        <input id="humans" type="number" min="1" placeholder="Чел."/>
                    </div>
                    <div>
                        <label htmlFor="sum">Сумма заказа:</label>
                        <input id="sum" type="number" min="0" placeholder="Сом"/>
                    </div>
                    <div>
                        <label htmlFor="percent">Процент чаевых:</label>
                        <input id="percent" type="number" min="0" placeholder="%"/>
                    </div>
                    <div>
                        <label htmlFor="delivery">Доставка:</label>
                        <input id="delivery" type="number" min="0" placeholder="Сом"/>
                    </div>

                    <input className="btn" type="button" value="Расчитать"/>
                    <input className="reset btn" type="reset"/>
                </div>
            </form>

            {result()}

        </div>
    );
}

export default App;
