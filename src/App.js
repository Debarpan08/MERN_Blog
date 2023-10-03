import './App.css';
import Post from './Post';
import Header from './Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home';
import { useRef } from 'react';

function App() {
  const myRef = useRef(null);
  return (
    <Routes>
      <Route path="/" element ={
        
         <Header />
         /* <Post />
         <Post />
         <Post /> */
       
      }/>
    </Routes>
    


    );
  }
  
  export default App;










  //   <BrowserRouter>
  //   <Routes>
  //   {/* <Route index element ={
  //       <main>
  //        <Header />
  //        <Post />
  //        <Post />
  //        <Post />
  //        </main>
  //     }/> */}
  //     <Route index element={<Home />} />
  //   </Routes>
  // </BrowserRouter>
      
     
      
   
 
