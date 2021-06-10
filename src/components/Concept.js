import React from 'react'

const Concept = (props) => {
    return (
            <div className='concept'>
              <div className='question'> 
              <h1>Concept/Question</h1>
              <h2>In what part of mitochondria does the electron transport chain take place?</h2>   
              </div>

              <div className='additional'>
              <h2>Additional information </h2>
              <h3>Mitochondria are membrane-bound cell organelles (mitochondrion, singular) that generate most of the chemical energy 
                  needed to power the cell's biochemical reactions. 
                  Chemical energy produced by the mitochondria is stored in a small molecule called adenosine triphosphate (ATP).</h3>     
              </div>
              <div className='additional'>
                <h3>taking notes ....</h3>
                {props.transcript}
              </div>
              
            </div>          
    )
}
export default Concept
