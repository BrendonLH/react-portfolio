import './main.scss';


function Main() {
    return (
      <div className="main" id='section-two'>
        {/* background section area */}
        <div id='background-main' className='section-main'>
          <header>
            <h1>Background</h1>
          </header>
        </div>

      {/* arrows for scrolling up and down */}
        <div id='arrows-main' className='section-main'>
          
        </div>
      {/* projects section area */}
        <div id='projects-main' className='section-main'>
          <header>
            <h1>Projects</h1>
          </header>
        </div>
      </div>
    );
  }
  
  export default Main;
  