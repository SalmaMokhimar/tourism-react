import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Gallery from '../../components/Gallery'
import { Container, Row, Col } from "react-bootstrap";
import Rate from '../../components/Rate'
import Detailstable from '../../components/DetailsTable'
import Title from '../../components/Title'
import LocationMap from '../../components/LocationMap'
import CommentsTable from '../../components/CommentsTable'
import RoomsSlider from '../../components/RoomsSlider'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail} from 'react-icons/ai'
import { useState , useEffect } from 'react'

import './TourDetails.scss'


const tour_details={
  departure_location:"san francisco onternational airport",
  departure_time:" 10:50 AM",
  max_travellers:23,
  languages:["English", "Thai", "Malayt"],
  includes:["africa" , "Professional Guide","Transportation"],
  excludes:["Departure Taxes" , "Insurance" ,"Entry Fees"],
  places:[" Eiffel Tower"," Eiffel Tower"," Eiffel Tower"]
}      

const TourDetails = ({title,images}) => {
  return (
    <>
      <Header />
      <div className='head text-center' >
        <div className='bread-crumbs-container'>
            <h1>
                Tour Details
            </h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Tour Details</Breadcrumb.Item>
            </Breadcrumb>
        </div>
      </div>
      <main>
        <section>
          <Container>
            <Row>
              <Col sm={12} md={12} lg={8} xl={8} xs={12}>
                <section className='gallery_container'>
                  <div className='title'>
                    <h2>
                      {title}
                    </h2>
                    <Rate rating={4.5}/>
                  </div> 
                  <Gallery images={images}  hasThumbnails={true}/>
                </section>
                <section className='description_container'>
                  <Title name={"description"}/>
                  <p>Brazil’s view takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Argentina’s side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world. From vibrant cities to scenic beauty, this vacation to Rio de Janeiro, Iguassu Falls, and Buenos Aires will leave you with vacation memories you’ll cherish for life.</p>
                  <Detailstable details={tour_details}/>
                </section>
                <section className='location_container'>
                  <Title name={"location map"}/>
                </section>
                <section className='comments_container'>
                  <Title name={"comments"}/>
                  <CommentsTable/>
                </section>
              </Col>             
              <Col sm={12} md={12} lg={4} xl={4} xs={12}>
                <aside>
                  <section className='rooms_slider'>
                    <Title name={"related room"}/>
                    <RoomsSlider images={images} indicators={false}/>
                  </section>
                  <section className='contact_us_container'>
                    <div className='contact_us'>
                      <h3> any questions ?</h3>
                      <p>Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sedpr do eiusmod tempor incididunt ut.</p>
                      <p>
                        <BsTelephone/> <span> (012)-345-6789 </span>
                      </p>
                      <p>
                        <AiOutlineMail/> <span>tourntravel@testmail.com</span>
                      </p>
                    </div>
                  </section>
                </aside>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TourDetails;