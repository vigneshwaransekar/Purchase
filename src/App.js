
import './App.css';
import Freet from './Components/Freet';
import Welcome from './Components/Welcome';
import Jsx from './Components/Jsx';
import NewFile from './Components/NewFile';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import Counters from './Components/Counters';

function App() {
  return (
    <div className="App">
      {/* <Freet name="vikki"/>
      <Freet name="kodi"/>
      <Freet name="yuvan"/> */}
      {/* <NewFile/> */}
      {/* <FunctionClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <React.Fragment>
        <navbar/>
          <main className="container"> */}
          <Counters/>    
          {/* </main>
          </React.Fragment> */}
      
      
      {/* <Welcome/>
      <Jsx/> */}
    </div>
  );
}

export default App;
