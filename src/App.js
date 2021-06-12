import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionTemplate from './components/QuestionTemplate';
import Data from './data.json';

let readQuestion = true;
const App = () => {
	return (
		<div>
			<QuestionTemplate
				teacher={Data[0].teacher}
				school={Data[0].school}
				assignment={Data[0].assignment}
				qno={Data[0].qno}
				progress={Data[0].progress}
				question={Data[0].question}
				additional={Data[0].additional}
			/>
		</div>
	);
};

export default App;
