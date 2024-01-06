import './App.css';
import Header from './Components/Header/Header';
import Left from './Components/Left/Left';
import Right from './Components/Right/Right';

function App() {
  return (
    <>
     <div className='interface'>
      <Header/>
      <div className='inter-content'>
      <Left/>
      <Right/>
      </div>
     
     </div>
    </>
  );
}

export default App;
