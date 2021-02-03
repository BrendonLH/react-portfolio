import './introduction.scss';
import {Link} from 'react-scroll';
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useSelector} from 'react-redux';

function Introduction() {

  const user = useSelector( state => state.user);
  console.log(user);


    return (
      <div id='section-one' className="intro intro-container">
        <div className='intro-one typewriter'>
          <h1 className='typewriter'>Hello World!</h1>
        </div>
        <div className='intro-two typewriter'>
        <h2 className='typewriter-text'>My name is {user.userName} and I am A Software Developer.</h2>
        </div>
        {/*  move to next section */}
        <div className='next-section-butt'>
          <Link
            activeClass="active"
            to="section-two"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          ><FontAwesomeIcon icon={faLongArrowAltDown} size='2x' /></Link>
        </div>
        
      </div>
    );
  }
  
  export default Introduction;
  