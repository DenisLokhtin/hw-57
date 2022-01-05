import React from 'react';

const ResultSeparated = (props) => (
    <div className="result">
        <p>Количество человек: {props.people.length}</p>
        {props.people.map((person, index) => {
            const price = Number(person.price);
            const result = Math.round((price + (price / 100 * props.value.percent)) + props.value.delivery / props.people.length);
            return <p key={index}>{person.name}: {result} сом</p>
        })}
    </div>
);

export default ResultSeparated;