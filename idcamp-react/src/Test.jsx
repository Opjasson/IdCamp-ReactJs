import React, { Children } from "react";

function Test(props) {
    const name = props.name;
    const cita_cita = props.cita_cita;
    return (
        <div>
            <h1>Hallo Nama Saya {name} cita-cita saya {cita_cita}</h1>

        </div>
    );
}

export default Test;
