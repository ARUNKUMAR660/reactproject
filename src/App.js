import {useState } from 'react' ;
import './App.css';
import Background from './components/background/Background';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';



function App() {
   let herodata=[
      {text1:"dive into",text2:"what you love"},
      {text1:"indulgu",text2:"yor passion"},
      {text1:"giv in to",text2:"yout passion"},
  ]
  const [herocount,setherocount]=useState(1)
  const [playstatus,setplaystatus]=useState(false)
  return (
    <div className="App">
      <Background playstatus={playstatus} herocount={herocount}/>
      <Navbar/>
      <Hero 
      setplaystatus={setplaystatus}
      herodata={herodata[herocount]}
      setherocount={setherocount}
      playstatus={playstatus}
      />
     </div>
  );
}

export default App;