import React, { useState } from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMoon} from '@fortawesome/free-solid-svg-icons'

export default function About() {

    const [state, setState] = useState({
            color: 'maroon',
            backgroundColor: 'blanchedalmond'
    })
    const[btntext, setBtnText] = useState("Light mode")

    // for text {enter the text for analysis}
    const [text, settext] = useState({
         color: 'maroon',
    })
   
    // for text coverting in uppercase
    const [upper, setupper] = useState("Enter text here");
     
    const upperCase = ()=>{
      let newvext = upper.toUpperCase();
      setupper(newvext)
    }
    const handleupClick =(event)=>{
        setupper (event.target.value)
    }
     
    // for text coverting in lowercase

     const lowerCase = ()=>{
      let newvext = upper.toLowerCase();
      setupper(newvext)
    }
    // // copy text
      const copyCase = () =>{
     let upper = document.getElementById("textarea");
     upper.select();
     navigator.clipboard.writeText(upper.value);

     }
    // remove extra spaces
     const handleExtraSpaces = () => {
        let newText = upper.split(/[ ]+/);
        setupper(newText.join(" "));
    }
   //  clear text
    const handleClearClick = ()=>{ 
        let newText = '';
        setupper(newText);
    }


    
    const toggleStyle =() =>{
        if(state.color ==="maroon"){
            setState({
                color: 'white',
                backgroundColor: 'rgb(85, 87, 86)',
              
        })  
        setBtnText("Dark Mode")
        settext({
          color : 'white'
        })
        document.body.style.background='rgb(90, 90, 136)'
        }
        else{
            setState({
                color: 'maroon',
                backgroundColor: 'blanchedalmond',
          
        })   
        setBtnText("Light Mode")
        settext({
          color : 'maroon'
        })
        document.body.style.background='aliceblue'
        }
        

    }
  return (
<>
    <div className='container' style = {state}>
      <div className="mainf" style = {state}>
    <h><a style = {state} href="https://legacy.reactjs.org/docs/hooks-intro.html"><FontAwesomeIcon icon={faHouse}/> &nbsp; Home</a></h> 
    <span className='nav'></span>
   <h><a style = {state} href="https://twitter.com/pradum_6120">Twitter</a></h>
   <h><a style = {state} href="https://github.com/Pradum6120>Github">Github</a></h>
  <h><a style = {state} href="https://legacy.reactjs.org/docs/hooks-intro.html">Telegram</a></h>
  <h><a style = {state} href="https://www.linkedin.com/in/pradum-kumar-a497a5210/">Linkedin</a></h>
    </div>
      <div className='notinav'>
      <h className="darkmode"onClick={toggleStyle}> <FontAwesomeIcon icon={faMoon}/> </h>
      <span className='soft'>{btntext}</span>
      </div>
      
   </div>
   <h1 style={text}>Enter Text To Analyze</h1>
    <div className='section'>
     
     <textarea style={state} name="" id="textarea" cols="30" rows="10" value={upper} onChange={handleupClick}  ></textarea>

    </div>
    <div className='btnn'>
      <button style = {state} onClick={upperCase}>Convert To UpperCase</button>
      <button style = {state} onClick={lowerCase}>Convert To LowerCase</button>
      <button style = {state} onClick={copyCase} >Copy Text</button>
      <button style = {state} onClick={handleClearClick}>Clear Text</button>
      <button style = {state} onClick={handleExtraSpaces}>Remove Space</button>
    </div>

    <div className='summery'>
      
      <div  className='textsummery' style = {text}> Your Text Summery</div>
      </div>
      <div  className='mainwordsandcharacter'>
      <div style={state}   className='wordsandcharacter'>
      <p  style={text}>
        <span className='words' >{upper.split(" ").length}</span> Words and Character <span style={state} className='character'>{upper.length}</span>
       <p>{0.008* upper.split(" ").length}  <span>minutes Read</span></p>
       </p>
    </div>
    </div>
    {/* <h2 style={text}>Preview</h2>
    <p style={text}>{upper}</p> */}

    
    
    </>
  )

}

