import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Left from './Components/Left/Left';
import Right from './Components/Right/Right';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Add from './Components/notification/Add';

function App() {
  const [showSideBar,setShowSideBar] = useState(false)

  const toggleSideBar = ()=>{
    setShowSideBar(!showSideBar)
  }
  return (
    <>
     <div className='interface'>
      <Header/>
      <div className='inter-content'>
        <Left showSideBar={showSideBar} setShowSideBar={setShowSideBar} />     
      <Right/>
      <Add/>
      </div>
     
      <div onClick={toggleSideBar} className='hamburger'>
        {!showSideBar ?       <RxHamburgerMenu style={{fontSize:'25px'}} />
:  <IoClose style={{fontSize:'25px'}} />}
      </div>
     </div>
    </>
  );
}

export default App;
