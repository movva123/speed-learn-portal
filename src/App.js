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
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import QuestionTemplate from './components/QuestionTemplate';
let readQuestion=true

const App = () => {
 
  return (
<div>
<QuestionTemplate teacher="Mike Scott" school="ABC School -XII class" assignment="Biology-Cellular Structure"  qno="Question No: 6" progress="Progress: 60%" question="What part of mitochondria does the electron transport chain take place?"
 additional="Mitochondria are membrane-bound cell organelles (mitochondrion, singular) that generate most of the chemical energy 
 needed to power the cells biochemical reactions. 
 Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP)."/>
</div>
  )
}

export default App


