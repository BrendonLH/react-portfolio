import './introduction.scss';


function Introduction() {
    return (
      <div className="intro intro-container">
        <div className='intro-one typewriter'>
          <h1 className='typewriter'>Hello World!</h1>
        </div>
        <div className='intro-two typewriter'>
        <h2 className='typewriter-text'>My name is Brendon and I am A Software Developer.</h2>
        </div>
        {/*  move to next section */}
        <div className='next-section-butt'>
        <a href='#section-two' className='next-button'>next</a>
        </div>
        
      </div>
    );
  }
  
  export default Introduction;
  