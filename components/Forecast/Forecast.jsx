import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import CurrentDay from '../CurrentDay';
import CurrentDayDescription from '../CurrentDayDescription';
import UpcomingDaysForecast from '../UpcomingDaysForecast';
import './Forecast.css';

const Forecast = ({forecast}) => (
    <Container className="box">
        <Row>
            <Col xs={12} md={4}>
                <div className="card">
                    <CurrentDay {...forecast.today} />
                </div>
            </Col>
            <Col xs={14} md={7} className="flex-column justify-content-between py-1">
                <CurrentDayDescription forecast={forecast.todaysDetails} />
                <UpcomingDaysForecast days={forecast.upcomingDays} />
            </Col>
        </Row>
    </Container>
);

export default Forecast;
