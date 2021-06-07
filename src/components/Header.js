import React from 'react';
import PropTypes from 'prop-types';
import skill from '../assets/skill.png';
const Header = ({title}) => {
    return (
        
        <header className='header'>
        <h1>{title}</h1> 
        </header>
            
    )
}

Header.defaultProps={
    title:'Welcome to Speed Learn - Beat the Pace your Life'
}

Header.propTypes={
    title: PropTypes.string
}


export default Header

