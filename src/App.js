import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Content from './components/Content';


const App = () => (
  <div className='App'>
      <Router>
          <Navbar />
          <Content />
      </Router>
  </div>
)

export default App;
