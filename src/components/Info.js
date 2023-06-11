import React from "react";
import {ReactComponent as World} from '../svg/world.svg'
import { AddInfo } from "./AddInfo";

export const Info = () => {
    return(
        <div className="info__wrapper">
            <div className="info__webinar">
                <World width="19" height="19"/>
                <span>Вебинар</span>
            </div>
            <div className="info__frontend">Front-end</div>
            <div className="info__subtitle">
                <div className="rotate-block">
                    <div>с нуля</div>
                </div>
                <span>легкий старт в IT профессии</span>
            </div>
            <div className="info__description">
            Узнайте какими <b>навыками должен обладать фронтенд разработчик 
            в 2022 году</b> и как начать карьеру в востребованной профессии <b>с зарплатой</b> <span>от 1 000$</span>
            </div>
            <AddInfo/>
        </div>
    )
}