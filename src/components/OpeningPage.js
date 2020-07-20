

import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function OpeningPage({ setPlayer, start ,opening}) {
  const [name, setName] = useState("");
  

  const changeName = e => {
    setName(e.target.value);
  };

  

  const handleClick = event => {
    if (name.length >= 1) {
      start(name)
      
      
    } else {
      alert("Error!");
      event.preventDefault();
    }
  };

  
  return (
    <div>
      <h1>Ready to war</h1>
      <br />
      <br />
      <input onChange={changeName}></input>
      <br />
      <Link to="/gamePage" onClick={handleClick}>
        <button >start</button>
      </Link>
    </div>
  );
}




//  /* const [notValid,setNotValid]=useState(true)
    
    

//     const changeName=(e)=>{
//         setName(e.target.value)
        
//         if(name.length>0){  
//             setNotValid(false)
            
//         }
//         else {setNotValid(true)}
        
//     }

//     const add=()=>{
//         setPlayer(name)
//     }

   
//    const goToGamePage=()=>{
//       return  notValid? '/':'/gamePage'
//     }
    
//    const alertMe=()=>{
//      if (name.length===0){
//          alert('Error')
//      }
//      else {add(name)
//     }
//    }
   
//     return (
//         <div>
//             <h1>Ready to war</h1>
//             <br/><br/>
//             <input  onChange={changeName} placeholder="write your name"></input>
            
//             <Link  to={{pathname: goToGamePage()}} ><button onClick={alertMe}>start</button></Link>
           
//         </div>
        
//     )
// }
// */











// import React, {useState} from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'



// export default function OpeningPage({setPlayer,player}) {
    
   
//     const [name,setName]=useState('')
//     const [valid,setValid]=useState(false)


//     const changeName = (e) => {
//         setName(e.target.value);
//     }

//     const add = () => {
//         setPlayer(name)
//      }


//      const validName = () => {
//         if (name!==""){
//             setValid(true)
//            add(name);      
//     }
//     else {
//         alert('Error!')} 
//     }

//     const goToGamePage=()=>{
//         return  valid? '/gamePage':'/'
//       }
   
//     return (
//         <div>
//          <input onChange={changeName}></input>
//          <Link  to={{pathname: goToGamePage()}} ><button  onClick={validName}>start</button></Link>
//         </div>
        
//     )
// }
