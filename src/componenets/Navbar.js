import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMoon} from '@fortawesome/free-solid-svg-icons'


export default function navbar() {
  const [mystyle, setMystyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })
  const toogleStyle = () => {
    if (mystyle.color === "black") {
      setMystyle({
            color: "white",
            backgroundColor: "black",
            border: "1px solid white",
        })
    }
    else {
      setMystyle({
          color: 'black',
          backgroundColor: 'white'
      })
  }
}
return (
   <div className='container'>
      <div className="mainf">
    <h>< a href="https://legacy.reactjs.org/docs/hooks-intro.html"><FontAwesomeIcon icon={faHouse}/> <span className='nav'>Home</span></a></h> 
   <h><a  href="https://legacy.reactjs.org/docs/hooks-intro.html" style = {mystyle}>Twitter</a></h>
   <h><a href="https://legacy.reactjs.org/docs/hooks-intro.html">Github </a></h>
  <h><a  href="https://legacy.reactjs.org/docs/hooks-intro.html">Telegram</a></h>
  <h><a  href="https://legacy.reactjs.org/docs/hooks-intro.html">Linkedin</a></h>
    </div>
      <div className='notinav'>
      <h className="darkmode"> <FontAwesomeIcon icon={faMoon} onClick={toogleStyle}/></h>
      <span className='soft'>{btntext}</span>
      </div>
   </div>
 )
 }
