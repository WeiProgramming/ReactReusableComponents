import React from 'react';
import './buttons.scss';



function Buttons({btnObj}: any) {
    console.log(btnObj);
    return (
        <div className="buttons-container">
            {
                btnObj.buttons.map( (btn: any) => {
                    return (<a href={btn.link} key={btn.id}>
                        {btn.text}
                    </a>)
                })
            }
        </div>
    )
}

export default Buttons;