import React from 'react';

const InputSeparated = (props) => (
    <form className="calc">
        <div className="inputs">
            <div className="newPerson">
                {props.people.map(person => (
                    <div key={person.id}>
                        <input className="nameInput" value={person.name} type="text" placeholder="Имя"/>
                        <input className="SumInput" value={person.name} type="number" min="0" placeholder="Сумма"/>
                        <button type="button" className="remove">&#10006;</button>
                    </div>
                ))}
            </div>
            <div className="btnCont">
                <button onClick={props.add} type="button" className="addBtn">+</button>
            </div>
            <div>
                <label htmlFor="percent">Процент чаевых:</label>
                <input id="percent" type="number" min="0" placeholder="%"/>
            </div>
            <div>
                <label htmlFor="delivery">Доставка:</label>
                <input id="delivery" type="number" min="0" placeholder="Сом"/>
            </div>

            <input className="btn res" type="button" value="Расчитать"/>
            <input className="reset btn" type="reset"/>
        </div>
    </form>
);

export default InputSeparated;