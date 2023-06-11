import React, { useEffect } from "react";

export const AddInfo = (props) => {
    return(
        <div className={props.addClass?`additional__wrapper ${props.addClass}`:"additional__wrapper"}>
            <div className="additional__teacher">
                <div className="additional__teacher-img">
                    <img src={process.env.PUBLIC_URL + "/img/teacher.png"} alt="photo"/>
                </div>
                <div className="additional__teacher-description">
                    <div className="additional__teacher-name">
                        Кирилл <a href="#">КАСАТОНОВ</a>
                    </div>
                    <div className="additional__teacher-bio">
                    6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями
                    </div>
                </div>
            </div>
            <div className="additional__bonus">
                <div className="additional__bonus-img">
                    <img src={process.env.PUBLIC_URL + "/img/bonus.png"} alt="photo"/>
                </div>
                <div className="additional__bonus-description">
                    <div className="additional__bonus-name">
                    Бонус за регистрацию
                    </div>
                    <div className="additional__bonus-description">
                    PDF-файл "5 преимуществ профессии фронтенд разработчика" 
                    </div>
                </div>
            </div>
        </div>
    )
}