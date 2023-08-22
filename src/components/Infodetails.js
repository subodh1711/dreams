import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { AiTwotoneHome } from 'react-icons/ai';
import { Paper } from '@mui/material';
import {SlCalender} from 'react-icons/sl';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export default function Infodetails() {
  return (
    <div>
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
        <TimelineContent  className="text-white" >Flight selected</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot class="bg-light text-dark" style={{width:30,height:30,"borderRadius":20}} >
        <p className='pt-1'>3</p>
          </TimelineDot >
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent   className="text-white" >Info details</TimelineContent>
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
      <br/><br/><br/><br/><br/>
    </div>
    <div class="col-md-8">
        <div class="signin">
        <div class="row">
                <div class="col-md-11"></div>
                <div class="col-md-1" style={{ "fontSize": "40px" }}><AiTwotoneHome /></div>
                <div class="paper">
              {/* <Paper elevation={3}>
               
               <SlCalender  class="calender"  size={30}>
                  
                </SlCalender><label>When will you be leaving?</label>

                <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
    </LocalizationProvider>
                </div>
             
                </Paper> */}
                  <div class="main">
        <div class="sub-main">
            <div class="form-group">
                <div><i class="fa-solid fa-calendar-days"></i><label class="m-3">When will you be Leaving ?</label></div>
                <input type="date" class="form-control date-field"/>

            </div>
            <div class="form-group">
                <label>Are you returning Back ? </label>
                <div class="all-btn">
                    <button class="btn-yes">Yes</button>
                    <button class="btn-no">No</button>
                </div>
                <div class="form-group">
                   <div> <i class="fa-solid fa-calendar-days"></i><label class="m-3">When are you Returning ?</label></div>
                    <input type="date" class="form-control date-field"/>
    
                </div>
            </div>
        </div>
    </div>
              
  


                </div>
            </div>
           
        </div>
        
    </div>
</div>

</center>
    </div>

    </div>
    
  )
}
