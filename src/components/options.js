import React from 'react';

const Options = (props) => (
    <form className="options">
        <p>Сумма заказа считается:</p>
        <div className="buttons">
            <div>
                <input onChange={props.setBoolean} type="radio" id="radio-1" name="option" checked={props.radioBtn === true}/>
                <label htmlFor="radio-1">Поровну между всеми участниками</label>
            </div>
            <div>
                <input onChange={props.setBoolean} type="radio" id="radio-2" name="option" checked={props.radioBtn === false}/>
                <label htmlFor="radio-2">Каждому индивидуально</label>
            </div>
        </div>
    </form>
);

export default Options;