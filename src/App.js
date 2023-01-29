import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';


const App = () => (
  <div className='App'>
      <Router>
          <Navbar />
          <Content />
          <Footer />
      </Router>
  </div>
)

export default App;
