import React from 'react';

const InputCommon = (props) => {
    const calculate = () => {

    };

    return (
        <form className="calc">
            <div className="inputs">
                <div>
                    <label htmlFor="humans">Человек:</label>
                    <input id="humans" type="number" name="numberOfPeople" onChange={e => props.change(e)} defaultValue={props.value.numberOfPeople} min="1" placeholder="Чел."/>
                </div>
                <div>
                    <label htmlFor="sum">Сумма заказа:</label>
                    <input id="sum" type="number" name="sum" onChange={e => props.change(e)} defaultValue={props.value.sum} min="1" placeholder="Сом"/>
                </div>
                <div>
                    <label htmlFor="percent">Процент чаевых:</label>
                    <input id="percent" type="number" name="percent" onChange={e => props.change(e)} defaultValue={props.value.percent} min="0" placeholder="%"/>
                </div>
                <div>
                    <label htmlFor="delivery">Доставка:</label>
                    <input id="delivery" type="number" name="delivery" onChange={e => props.change(e)} defaultValue={props.value.delivery} min="0" placeholder="Сом"/>
                </div>

                <input onClick={props.result} className="btn res" type="button" value="Расcчитать"/>
                <input className="reset btn" type="reset"/>
            </div>
        </form>
    )
};

export default InputCommon;