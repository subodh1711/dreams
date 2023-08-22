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
import { Link, useNavigate } from 'react-router-dom';


export default function Build() {
  const navigate=useNavigate();
  const submitHandle=(e)=>{
      e.preventDefault();
      navigate('/infodetails');
  }
  return (
    <div>
        <center>

<div class="row">
    <div class="col-md-4 first">
      <div class="list">
      <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot class="bg-light text-dark" style={{width:30,height:30,"borderRadius":20}}>
          <p className='pt-1'>1</p>
          </TimelineDot >
          
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  className="text-white" >Build your dreams</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot class="bg-light text-dark" style={{width:30,height:30,"borderRadius":20}}>
        <p className='pt-1'>2</p>
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >Flight selected</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot class="bg-light text-dark" style={{width:30,height:30,"borderRadius":20}} >
        <p className='pt-1'>3</p>
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  >Info details</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot class="bg-light text-dark" style={{width:30,height:30,"borderRadius":20}} >
        <p className='pt-1'>4</p>
          </TimelineDot  >
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
    <h3>FLIGHT</h3>
  
    </div>
    <div class="col hotel">
    <FaHome size={80}/>
    <h3>HOTEL</h3>
    </div>
    <div class="col hotel-flight">
    <FaHotel size={80}/>  
    <h3>HOTEL_FLIGHT</h3>
    </div>
  </div>
</div>

       
           

                <div class=" p-3 pt-4 mt-4 d-flex   click  ">
                  
         
                    <button className='btn btn-outline-primary ms-auto back'  type="subimt">
                        Back
                        </button>
                    {/* <button className='btn btn-primary' type="subimt">Next</button> */}
                    <Link to="/infodetails" className="btn btn-primary "  type="subimt">Next</Link>
                </div><br /><br /><br /><br/>
            


        </div>
        
    </div>
</div>

</center>
    </div>
  )
}
