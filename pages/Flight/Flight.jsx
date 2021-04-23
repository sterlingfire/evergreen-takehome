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

export default Flight;
