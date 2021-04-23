import Head from 'next/head'
import Header from './Header'
import Flight from './Flight'
import { Container, Row, Card, Button } from 'react-bootstrap'
import {itineraries,legs} from '../public/static/flights.json';

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <Header />
      </Head>
      <Container>
        <Container>
          <Row className="justify-content-md-between">
            {itineraries.map(itinerary => {
              const leg1 = legs.find(leg => leg.id == itinerary.legs[0]);
              const leg2 = legs.find(leg => leg.id == itinerary.legs[1]);

              return <Flight
                      itinerary={itinerary}
                      departureLeg={leg1}
                      returnLeg={leg2}  />})}
          </Row>
        </Container>
      </Container>

      <footer className="cntr-footer">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Written by Sterling Bishop as a take home assignment for Evergreen.
        </a>
      </footer>
    </Container>
  )
}
