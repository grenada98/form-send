import './components/Header'
import { Header } from './components/Header';
import {Info} from './components/Info'
import {Form} from './components/Form'
import {AddInfo} from './components/AddInfo'
import './App.scss';


function App() {
  return (
    <div className="App">
      <div className='blur-left'></div>
      <div className='blur-right'></div>
      <Header/>
      <div className='main'>
          <Info/>
          <Form/>
          <AddInfo addClass={"mobile"}/>
          <img className="img-technology" src={process.env.PUBLIC_URL + "/img/technology.png"} alt="technology"/>
      </div>
    </div>
  );
}

export default App;
