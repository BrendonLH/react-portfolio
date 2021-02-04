import './main.scss';
import '../introduction-section/introduction.scss';
import {Link} from 'react-scroll';
import { faLongArrowAltDown, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';

function Main() {

  // user broken down into segments
  const user = useSelector(state => state.user);
  const background = user.background1;
  const backgroundTwo = user.background2;
  const projects = user.projects;

  console.log(projects);

    return (
      <div className="main" id='section-two'>
        {/* background section area */}
        <section id='background-main' className='section-main'>
            <header>
              <h1>Background</h1>
            </header>
            <p>{background}</p>
            <p>{backgroundTwo}</p>
        </section>

      {/* arrows for scrolling up and down */}
        <div id='arrows-main' className='section-main'>
          <div className='next-section-butt'>
            <Link
              activeClass="active"
              to="section-one"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            ><FontAwesomeIcon icon={faLongArrowAltUp} size='2x' /></Link>
          </div>

          <div className='next-section-butt'>
            <Link
              activeClass="active"
              to="section-three"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            ><FontAwesomeIcon icon={faLongArrowAltDown} size='2x' /></Link>
          </div>
        </div>
      {/* projects section area */}
        <section id='projects-main' className='section-main'>
          <header>
            <h1>Projects</h1>
          </header>
          <div id='projects-scroll'>
            {
              projects.map(project => (

                <div className='project'>
                  <div id='project-image'>
                    <p>{project.image}</p>
                  </div>
                  <div id='project-info'>
                    <li>{project.title}</li>
                    <li>{project.description}</li>
                    <li>{project.skillsUsed}</li>
                  </div>
                </div>
              ))

            }
          </div>
        </section>
      </div>
    );
  }
  
  export default Main;
  