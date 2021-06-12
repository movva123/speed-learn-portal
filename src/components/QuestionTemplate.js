import React from 'react';
import '../App.css';

import QImage from './QImage';
import Concept from './Concept';

import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CustomNavbar from './CustomNavbar';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import FigureImage from 'react-bootstrap/FigureImage';
import Figure from 'react-bootstrap/Figure';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//Global Variables
let readQuestion = true;
let spokenText = '';

//Props required for the template:
//1.props.teacher- Description of props
//2.props.school -Description of the school
//3.props.assignment - Assignment
//4. props.qno - Question Number
//5. props.progress
//6.props.question
//7.props.additional

const QuestionTemplate = (props) => {
	let question = 'welcome to react native';
	const [lang, setLang] = useState('en-AU');
	const [value, setValue] = useState('');
	const [blocked, setBlocked] = useState(false);
	let SpokenLang = 'en-AU';
	let spoken = false;
	const { speak, speaking } = useSpeechSynthesis();
	question = props.question;

	const onEnd = () => {
		// You could do something here after listening has finished
	};

	const onResult = (result) => {
		setValue(result);
	};

	const changeLang = (event) => {
		setLang(event.target.value);
	};

	const onError = (event) => {
		if (event.error === 'not-allowed') {
			setBlocked(true);
		}
	};

	const { listen, listening, stop, supported } = useSpeechRecognition({
		onResult,
		onEnd,
		onError,
	});

	const stopListen = () => {
		console.log('stopping to listen');
	};

	const SpeakListen = () => {
		console.log(question);

		if (readQuestion) {
			console.log('Function called now too');
			speak({ text: question });
			readQuestion = false;
		}
	};

	const toggle = listening
		? stop
		: () => {
				setBlocked(false);
				listen({ lang });
		  };

	return (
		<div className="parent">
			<CustomNavbar />
			<div className="container2">
				<Figure style={{ flex: 1, marginLeft: 10 }}>
					<Figure.Image
						width={100}
						height={100}
						src={require('../assets/teacher.png').default}
					/>
					<Figure.Caption>{props.teacher}</Figure.Caption>
				</Figure>

				<Card style={{ flex: 1, marginLeft: 10, height: 100 }} bg="light">
					<Card.Body>
						<h4>{props.school}</h4>
					</Card.Body>
				</Card>

				<Card
					style={{ flex: 1, marginLeft: 10, height: 100, marginRight: 10 }}
					bg="light"
				>
					<Card.Body>
						<h4>{props.assignment}</h4>
					</Card.Body>
				</Card>

				<Card
					style={{ flex: 1, marginLeft: 10, height: 100, marginRight: 10 }}
					bg="info"
				>
					<Card.Body>
						<h4>{props.qno}</h4>
					</Card.Body>
				</Card>

				<Card
					style={{ flex: 1, marginLeft: 10, height: 100, marginRight: 10 }}
					bg="light"
				>
					<Card.Body>
						<h4>{props.progress}</h4>
					</Card.Body>
				</Card>

				<div>
					<CountdownCircleTimer
						isPlaying
						duration={60}
						size={100}
						colors={[
							['#004777', 0.33],
							['#F7B801', 0.33],
							['#A30000', 0.33],
						]}
						onComplete={stopListen}
						style={{ flex: 1, marginLeft: 20 }}
					>
						{({ remainingTime }) => remainingTime}
					</CountdownCircleTimer>
				</div>
			</div>
			<div className="container1">
				<QImage />
				<Concept
					transcript={value}
					question={props.question}
					additional={props.additional}
				/>
			</div>

			{SpeakListen()}

			{/* {StartListening()} */}
			<div className="container3">
				<Button
					onClick={() => speak({ text: question })}
					size="lg"
					variant="secondary"
				>
					Repeat the question(audio)
				</Button>
				<Button size="lg" variant="secondary" onClick={toggle}>
					Listen/Stop
				</Button>
				<Button size="lg" variant="primary">
					Submit
				</Button>
				<Button size="lg" variant="primary">
					Skip
				</Button>
			</div>
		</div>
	);
};

export default QuestionTemplate;
