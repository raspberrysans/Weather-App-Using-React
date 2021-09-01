import React from 'react';

import './UpcomingDaysForecast.css';
import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';
const UpcomingDaysForecast = ({ days }) => 
    <ul className = "weekList d-flex justify-content-between p-0">
        {days.map(day => (
                <UpcomingDaysForecastItem {...day} key={day.weekday} />
            ))
            }
    </ul>

export default UpcomingDaysForecast;
