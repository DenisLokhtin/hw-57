import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [value, setValue] = useState({
        sum: 0,
        numberOfPeople: 0,
        percent: 0,
        delivery: 0,
    });

    const [radioBtn, setRadioBtn] = useState(true);

    const humans = ["petr", "sodas", "anton",]

    const radioBoolean = function () {
        setRadioBtn(!radioBtn)
    };

    const result = function () {
        if (radioBtn) {
            return (
                <div className="result">
                    <p>Общая сумма: 1150 сом</p>
                    <p>Количество человек: 3</p>
                    <p>Каждый платит по: 384 сом</p>
                </div>
            )
        } else {
            return (
                <div className="result">
                    <p>Общая сумма: 1150 сом</p>
                    <p>Количество человек: 3</p>
                    {humans.map((humans, index) => {
                        return <p>{humans}</p>
                    })}
                </div>
            )
        }
    }

    return (
        <div className="container">

            <form className="options">
                <p>Сумма заказа считается:</p>
                <div className="buttons">
                    <div>
                        <input type="radio" id="radio-1" name="option" checked/>
                        <label htmlFor="radio-1">Поровну между всеми участниками</label>
                    </div>
                    <div>
                        <input type="radio" id="radio-2" name="option"/>
                        <label htmlFor="radio-2">Каждому индивидуально</label>
                    </div>
                </div>
            </form>

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
