import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Concept = (props) => {
    return (
            <div className='concept'>

              <Card style={{flex:1,marginLeft:10,marginTop:10,marginRight:10}}>
              <Card.Title>
              Concept/Question
              </Card.Title>
              <Card.Body>
              {props.question}
              </Card.Body>
              </Card>

              <Card style={{flex:1,marginLeft:10,marginTop:10,marginRight:10}}>
              <Card.Title>
              Additional information
              </Card.Title>
              <Card.Body>
                {props.additional}
              </Card.Body>
              </Card>

              <Card style={{flex:1,marginLeft:10,marginTop:10,marginRight:10}}>
              <Card.Title>
                taking notes ....
              </Card.Title>
              <Card.Body>
                {props.transcript}
              </Card.Body>
              </Card>
              
            </div>          
    )
}
export default Concept
