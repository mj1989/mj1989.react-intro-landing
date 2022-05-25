import './App.css';
import CallToAction from './components/CallToAction';
import Form from './components/Form';
import TopHeadSection from './components/TopHeadSection';

function App() {
  return (
    <div className="container">
      <div className='top'>
        <TopHeadSection/>  
      </div>   

      <div className='bottom'>
        <CallToAction />
        <Form />
      </div>
    </div>
  );
}

export default App;
