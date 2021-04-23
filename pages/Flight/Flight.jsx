import React from 'react';
import { Card, Button} from 'react-bootstrap';
import {FaArrowRight} from 'react-icons/fa';
import styles from './Flight.module.css';

const Flight = ({itinerary, departureLeg, returnLeg}) => (
  <Card className="card" style={{ width:"100%", marginBottom:"20px"}}>
    <Card.Body>
      <Card.Text>
        <img
          width="32px"
          height="32px"
          src={`https://logos.skyscnr.com/images/airlines/favicon/${departureLeg.airline_id}.png`}
         />
       <sub className={styles.airportCode}>{departureLeg.departure_airport}</sub> {departureLeg.departure_time.substring(11)}
       &nbsp;<FaArrowRight/>&nbsp; {departureLeg.arrival_time.substring(11)}&nbsp;
       <sub className={styles.airportCode}>{departureLeg.arrival_airport}</sub>
       <span className={styles.time} > {Math.floor(departureLeg.duration_mins/60)}h {departureLeg.duration_mins % 60}
         {departureLeg.stops==0
          ? <sub className={styles.green}> Direct </sub>
          : <sub className={styles.red}> 1 Stop </sub>} </span>
      </Card.Text>
      <Card.Text>
      <img
        width="32px"
        height="32px"
        src={`https://logos.skyscnr.com/images/airlines/favicon/${departureLeg.airline_id}.png`} />
        <sub className={styles.airportCode} >{returnLeg.departure_airport}</sub>
        &nbsp;{returnLeg.departure_time.substring(11)}
       &nbsp;<FaArrowRight/>&nbsp; {returnLeg.arrival_time.substring(11)}&nbsp;
        <sub className={styles.airportCode}> {returnLeg.arrival_airport}</sub>
        <span className={styles.time}>{Math.floor(returnLeg.duration_mins/60)}h {returnLeg.duration_mins % 60}
        {returnLeg.stops==0
          ? <sub className={styles.green}> Direct </sub>
          : <sub className={styles.red}> 1 Stop </sub>} </span>
      </Card.Text>
      <Button size="lg" className={styles.selectButton} > <b>Select</b> </Button>
      <Card.Text>
      <span className={styles.price}> {itinerary.price} </span>
      <span className={styles.sourceSite} > {itinerary.agent} </span>
      </Card.Text>
    </Card.Body>
  </Card>
);

Flight.defaultProps = {
  // {itinerary, departureLeg, returnLeg}
  itinerary:{
    "id": "it_1",
    "legs": [
      "leg_1",
      "leg_4"
    ],
    "price": "£35",
    "agent": "Wizzair.com",
    "agent_rating": 9.1
  },
  departureLeg: {
    "id": "leg_1",
    "departure_airport": "BUD",
    "arrival_airport": "LTN",
    "departure_time": "2020-10-31T15:35",
    "arrival_time": "2020-10-31T17:00",
    "stops": 0,
    "airline_name": "Wizz Air",
    "airline_id": "WZ",
    "duration_mins": 145
  },
  returnLeg: {
    "id": "leg_4",
    "departure_airport": "LTN",
    "arrival_airport": "BUD",
    "departure_time": "2020-11-11T19:45",
    "arrival_time": "2020-11-11T21:10",
    "stops": 0,
    "airline_name": "Wizz Air",
    "airline_id": "WZ",
    "duration_mins": 145
  }
}

export default Flight;
