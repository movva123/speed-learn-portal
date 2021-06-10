import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import QImage from './components/QImage'
import Concept from './components/Concept'

import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CustomNavbar from './components/CustomNavbar';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import FigureImage from 'react-bootstrap/FigureImage'
import Figure from 'react-bootstrap/Figure';
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'

let readQuestion=true;
let spokenText=''
const App = () => {
  const progress=60
  const progressLabel ='60%'
  const question='Welcome to React Native'
  let spoken =false
  const { speak,speaking} = useSpeechSynthesis();
  
  
  const stopListen=()=>{
  console.log('stopping to listen')
  SpeechRecognition.stopListening();

  }


  const SpeakListen=()=>{
  if (readQuestion)
  {
  speak({text:question})
  while (spoken==false){
    console.log("still speaking")
  }
  readQuestion=false
  }
  SpeechRecognition.startListening();
  setTimeout(function(){console.log('Listening ...');},3000);
  const {transcript} =useSpeechRecognition();
  console.log(transcript)
  }

  return (
    <div className='parent'>
    <CustomNavbar />
  <div className='container2'>
  <Figure  style={{flex:1,marginLeft:10,height:100,width:150}}>
   <Figure.Image
      width={100}
      height={100}
      src={require('./assets/teacher.png').default }
    />
    <Figure.Caption>
        Teacher:Mike Scott
    </Figure.Caption>
  </Figure>
  <div style={{flex:1}}>
  <h5>Course Progress</h5>
  <ProgressBar now={progress} label={progressLabel} style={{flex:1,marginLeft:10}}/>
  </div>
  

  <Card style={{flex:1,marginLeft:10,height:100}}>
    <Card.Body>
    <h4>ABC School XII Class</h4>
    </Card.Body>
    </Card>

   <Card style={{flex:1,marginLeft:10,height:100}} >
       <Card.Body >
        <h4>Question 6</h4> 
       </Card.Body>
   </Card>
   
   <Card style={{flex:1,marginLeft:10,height:100,marginRight:10}}>
       <Card.Body >
         <h4>Biology-Cell Structure</h4>
       </Card.Body>
   </Card>
   <div>
   <h5>Time Remaining</h5>
   <CountdownCircleTimer
      isPlaying
      duration={60}
      size={80}
      colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
    label={'Time Remaining'}
    onComplete={stopListen}
    style={{flex:1,marginLeft:10}}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>

   </div>
   
    </div>
    <div className='container1'>
    <QImage />
    <Concept transcript="placeholder for what you said"/>
    </div>
    
    {/* {SpeakListen()} */}
    <div className='container2'>  
    <Button onClick={()=>speak({text:question})} size="lg"  >Repeat the question(audio)</Button>
    <Button size="lg">submit</Button>
    <Button size="lg">skip</Button >
    </div>
    </div>

  )
}

export default App


