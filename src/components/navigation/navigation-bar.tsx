import React from 'react';
import './navigation-bar.scss';

/*
* @Params Object NavigationObj, String 'left' or 'right' nav items alignment 
*
*/

function NavigationBar({NavigationItems, Alignment} :any) {
    return (
        <nav id="component-navigation-bar">
            <ul className="nav-container">
            {NavigationItems.list.map((navItem: any) => {
                return (
                <li className="nav-item" key={navItem.id.toString()}>
                    <a href={navItem.url}>{navItem.text}</a>
                </li>)
            })}
            </ul>
        </nav>
    )
}

export default NavigationBar;