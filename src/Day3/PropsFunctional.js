import React from "react";

export default function PropsFunctional(props)
{
    return (
        <div>
            <h1>
                Hi my name is {props.name} and my age is {props.age}
            </h1>
        </div>
    )
}