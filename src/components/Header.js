import React from "react";
import {ReactComponent as Calendar} from '../svg/calendar_today.svg'
import {ReactComponent as Time} from '../svg/gg_time.svg'

export const Header = () =>{
    return(
        <header className="header">
            <a className="header__logo" href="#">
                <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"/>
            </a>
            <nav className="header__menu">
                    <div className="header__info">
                        <Calendar width="17" height="17"/>
                        <span>28 декабря</span>
                    </div>
                    <div className="header__info">
                        <Time width="17" height="17"/>
                        <span>3,5 часа</span>
                    </div>
                </nav>
        </header>
    )
}