import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
const location = useLocation();

   const onClick = () =>{
        console.log('click')
    }
    
  return (
    <header className='header'>
        <h1>{title}</h1>

         {location.pathname === '/' && <Button 
         color={showAdd ? 'red' : "green"} 
         text={showAdd ? 'close' : 'Add'}
         onClick = {onAdd} />}
         </header>
  )
}
Header.defaultProps = {
title:'Task Tracker',
}

Header.propTypes ={
  title: PropTypes.string.isRequired,
}

// when we style them outside not inline
// const headingstyle ={
//   color:'pink',
//   backgroundColor:'black'
// }

export default Header