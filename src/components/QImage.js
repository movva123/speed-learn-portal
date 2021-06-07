

import React from 'react'

const QImage = () => {
    return (
        <div className='qimage'>
           {<img src={require('../assets/mitochondria.png').default } width={600} height={500}/>} 
            
        </div>
       
        
    )
}

export default QImage
