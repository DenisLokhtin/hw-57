import React from 'react';

const InputSeparated = (props) => (
    <form className="calc">
        <div className="inputs">
            <div className="newPerson">
                {props.people.map((person, index)=> {
                    return (
                        <div key={person.id}>
                            <input id={index} onChange={e => props.change(e)} name="name" className="nameInput" value={person.name} type="text" placeholder="Имя"/>
                            <input id={index} onChange={e => props.change(e)} name="price" className="SumInput" value={person.price} type="number" min="1" placeholder="Сумма"/>
                            <button onClick={e => props.delete(e)} id={index} type="button" className="remove">&#10006;</button>
                        </div>
                    )
                })}
            </div>
            <div className="btnCont">
                <button onClick={props.add} type="button" className="addBtn">+</button>
            </div>
            <div>
                <label htmlFor="percent">Процент чаевых:</label>
                <input id="percent" name="percent" onChange={e => props.changeVal(e)} defaultValue={props.value.percent} type="number" min="0" placeholder="%"/>
            </div>
            <div>
                <label htmlFor="delivery">Доставка:</label>
                <input id="delivery" name="delivery" onChange={e => props.changeVal(e)} defaultValue={props.value.delivery} type="number" min="0" placeholder="Сом"/>
            </div>
        </div>
    </form>
);

export default InputSeparated;