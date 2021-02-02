import Introduction from './components/introduction-section/introduction.js';
import Closing from './components/closing-section/closing.js';
import Main from './components/main-section/main.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Introduction/>
      <Closing/>
      <Main/>
    </div>
  );
}

export default App;
