import React from 'react'
import { AiTwotoneHome } from 'react-icons/ai';
import {MdFlightTakeoff} from 'react-icons/md';
import {FaHome} from 'react-icons/fa';
import {FaHotel} from 'react-icons/fa';
import {CiSearch} from 'react-icons/ci';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export default function Build() {
  return (
    <div>
        <center>

<div class="row">
    <div class="col-md-4 first">
      <div class="list">
      <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot >
            1
          </TimelineDot >
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Build your dreams</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot >
            2
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Flight selected</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot >
            3
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Info details</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot >
            4
          </TimelineDot >
            </TimelineSeparator>
        <TimelineContent>Confirmation</TimelineContent>
      </TimelineItem>
    </Timeline>

      </div>
      <div >
        <p class="text">Let's start your dream</p>
        <p class="text">in a few steps!</p>
      </div>

    </div>
    <div class="col-md-8">
        <div class="signin">
            <div class="row">
                <div class="col-md-11"></div>
                <div class="col-md-1" style={{ "fontSize": "40px" }}><AiTwotoneHome /></div>
            </div>
          
            <h2>Let's Build Your dream!</h2><br />
            <div class="mb-3">
                <div class="search">  <CiSearch/></div>
              
                    <input type="search" class="form-control" placeholder='Search' required/><br />

                </div>
                {/* <div class="square">
                <MdFlightTakeoff/> 
                  
            <FaHome/>
            <FaHotel/>  
                </div> */}
                <div class="container">
  <div class="row img ">
    <div class="col flight ">
    <MdFlightTakeoff size={80} />
    <p>FLIGHT</p>
  
    </div>
    <div class="col hotel">
    <FaHome size={80}/>
    <p>HOTEL</p>
    </div>
    <div class="col hotel-flight">
    <FaHotel size={80}/>  
    <p>HOTEL_FLIGHT</p>
    </div>
  </div>
</div>

       
           

                <div class=" p-3 pt-4 mt-4 d-flex   click  ">
                  
         
                    <button className='btn btn-outline-primary ms-auto back' type="subimt">
                        Back
                        </button>
                    <button className='btn btn-primary' type="subimt">Next</button>
                </div><br /><br /><br /><br/>
            


        </div>
        
    </div>
</div>

</center>
    </div>
  )
}
