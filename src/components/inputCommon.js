import React from 'react';

const InputCommon = (props) => (
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

            <input className="btn res" type="button" value="Расcчитать"/>
            <input className="reset btn" type="reset"/>
        </div>
    </form>
);

export default InputCommon;