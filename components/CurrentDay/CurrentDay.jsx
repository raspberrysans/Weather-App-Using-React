import React from 'react';
import './CurrentDay.css';

const CurrentDay = ({weekday, date, location, temperature, weatherIcon, weatherDescription}) => (
    <div className="d-flex">
        <div className="img">
        </div>
        <div className="gradient"></div>
        <div className="cardInner justify-content-between pt-3">
            <div>
                <h2 className="font-weight-bold mb-1 font-italic"> {location} </h2>
                <p className="mb-0 font-italic">{date}</p>
                <div align-content="right"> <p className="d-flex align-items-baseline font-weight-lighter mb-1 font-italic">
                    <span>{weekday}</span>
                </p></div>
            </div>
            <br/><br/><br/>
            <div>
                <img width="45" src={weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-1 font-italic">
                        <span>{temperature}</span>°C
                    </h2>
                    <h5 className="font-weight-normal font-italic">{weatherDescription}</h5>
            </div>
        </div>
    </div>
);

export default CurrentDay;
