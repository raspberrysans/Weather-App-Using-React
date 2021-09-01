import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Forecast from '../Forecast';
import Loader from '../Loader';
import useForecast from '../../hooks/useForecast';
import './Page.css';
const Page = () => {
    const { isError, isLoading, forecast, submitRequest } = useForecast();
    const onSubmit = (value) => {
        
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            {!forecast && (
                <div>
                     <div className="box">
                        {!isLoading && <Form submitSearch={onSubmit} /> }
                        {isLoading && <Loader />}
                        
                    </div>
                    <div> {isError && <Error message={isError} />}</div>

                </div>
            
            
                )
            }
            {
                forecast && 
                (
                    <Forecast forecast={forecast}/>                    
                )
                
            }
            {forecast && <Form submitSearch={onSubmit} />}
        
            
        </Fragment>
    );
};

export default Page;
