import React from 'react';

const ResultCommon = (props) => (
    <div className="result">
        <p>Количество человек: {props.people}</p>
        <p>Каждый платит по: {props.result} сом</p>
    </div>
);

export default ResultCommon;