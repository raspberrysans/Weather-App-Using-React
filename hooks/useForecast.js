import React, { useState } from 'react';
import axios from 'axios';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const baseURL = 'https://www.metaweather.com/api/location';
const crossdomain = "https://the-ultimate-api-challenge.herokuapp.com";
const requestURL = `${crossdomain}/${baseURL}`;

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const whereinworld = async location => {
        {/* send data to the server */}
        const  {data}  = await axios(`${requestURL}/search`, { params: { query: location } });
        console.log(data[0]);
        if(!data || data.length === 0) {
            setError("Please enter a valid location");
            setLoading(false);
            return;
        }
        return data[0];
    }

    const getForecastData = async whereinworld => {
        const { data } = await axios(`${requestURL}/${whereinworld}`);

        if(!data || data.length === 0)
        {
            setError("Unable to get Forecast data for this location");
            setLoading(false);
            return;
        }
        console.log(data);
        return data;
    }

    const gatherForecastData = data => {
        const today = getCurrentDayForecast(data.consolidated_weather[0], data.title);
        const todaysDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
        const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

        console.log(today, todaysDetails)
        setForecast({ today, todaysDetails, upcomingDays });
        setLoading(false);
    }

    const submitRequest = async location => {
        setLoading(true);
        setError(false);
        const response =  await whereinworld(location);
        if(!response) return;
        else{
            const data = await getForecastData(response.woeid);
            if (!data) return;
            gatherForecastData(data);

        }
    }
    return {
        isError, isLoading, forecast, submitRequest
    };
}

export default useForecast;