import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css"
import Message from './message/Message'
import ChatHeader from './chatHeader/ChatHeader'
import ThreeDotsHelper from './common/ThreeDotsHelper'
import { useContext } from 'react'
import AuthContext from './store/AuthContext'


function Chat({model}) {
  const [response,setResonse] = useState([]);
  const [questions,setQuestions] = useState("");
  const [responses,setResponses] = useState([]);
  const [passage,setPassage] = useState("")
  const [pending,setPending] = useState(false)
  const authCtx = useContext(AuthContext)

  const chatboxRef = useRef(null);
  const inputRef = useRef();

  useEffect(() => {
    // Scroll to the bottom of the chatbox when new messages are added
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [responses]);



  useEffect(()=>{ 
    fetch("https://talkingdocs.onrender.com/pdf/getYourPdfText",{
      headers:{
        'Authorization': `Bearer ${authCtx.token}`
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      return(
        setPassage(`${data.data}`)
      )
    })
  },[])



useEffect(()=>{
  setTimeout(()=>{
    AutomaticAnswers();
  },2000)
 
},[questions])


async function AutomaticAnswers(){
    const question = inputRef.current.value
    const answers = await model.findAnswers(question, passage);
    // console.log(answers)
    const text = answers.length>0?answers[0].text:"An error occurred; please ask a different question."
    const lastObject = responses.pop();
    const modifiedObject = {question:lastObject.question  , answer:text}
    const updatedResponse = [...responses,modifiedObject]

    setResponses(updatedResponse)
    setResonse([...response,text])
    inputRef.current.value=""
    setPending(false)
}




async function handleSubmitQuestion(e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  setPending(true)
  // Make a copy of the current responses array
  const updatedResponses = [...responses];

  // Get the current value of the input field
  const newQuestion = inputRef.current.value;

  // Update the responses state by adding a new response object
  setResponses([...responses, { question: newQuestion  }]);

  // Update the questions state by adding the new question
  setQuestions(Math.random());
  // settempquestion(newQuestion)
   

}
  return (
            <>
                <section className="msger">
                   < ChatHeader/>
                  <div style={{margin:"10px"}}></div>
                    <div className="msger-chat" ref={chatboxRef}>
                    <Message answer={"Hey , Now You can ask About Your Pdf "} ></Message>
                      {responses.map(({question,answer})=>{
                        return(
                          <>
                          <Message  answer={question} isQuestion={true}/>
                          {answer && <Message answer={answer} isQuestion={false}></Message>}
                          </>
                        )
                      })}
                       {pending && <ThreeDotsHelper/>}
                    </div>
                        <div style={{margin:"10px"}}></div>
                        <div className="msger-inputarea" >
                          <input
                              type="text"
                              className="msger-input"
                              placeholder="Enter your message..."
                              ref={inputRef}
                          />

                          <button   onClick={handleSubmitQuestion}   className="msger-send-btn" >
                              Send
                          </button>
                        </div>
                </section>
          </>
  )
}

export default Chat