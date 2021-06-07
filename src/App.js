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
import Button from 'react-bootstrap/Button';


const App = () => {
  const progress=60
  const progressLabel ='60%'
  const question='welcome to react native'
  let readQuestion=true;
  const { speak } = useSpeechSynthesis();
  
  return (
    <div className='parent'>
    {/* `<Header title='Speed Learn'/> */}
    <CustomNavbar />
    <div style={{ display: 'block', padding: 10}}>
    <h4>Assignement Progress</h4>
    <ProgressBar now={progress} label={progressLabel}/>
    </div>
    <div className='container2'>
    {/* <img src={require('./assets/teacher.png').default } width={180} height={180}/> */}
    <Figure>
  <Figure.Image
    width={150}
    height={150}
    alt="171x180"
    src={require('./assets/teacher.png').default }
  />
  <Figure.Caption>
    Mike Scott
  </Figure.Caption>
</Figure>
    
    <Card bg={'primary'} text={'white'}>
       <Card.Body >
         <h1>Question 6</h1>
       </Card.Body>
    </Card>
    <Card bg={'primary'} text={'white'}>
      <Card.Title>Assignment</Card.Title>
       <Card.Body >
         <h1>Biology-Cell Structure</h1>
       </Card.Body>
    </Card>
    <CountdownCircleTimer
    isPlaying
    duration={60}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
    ariaLabel={'Time Remaining'}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
    </div>
    <div className='container1'>
    {<QImage />} 
    <Concept />
    </div>
    </div>
  )
}

export default App


