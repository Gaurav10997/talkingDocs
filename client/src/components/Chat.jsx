import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css"
// import  * as tfjs from "@tensorflow/tfjs"
// import * as qna from "@tensorflow-models/qna"
import Message from './message/Message'
import ChatHeader from './chatHeader/ChatHeader'
import ChatInput from "./chatinput/ChatInput"

function Chat({model}) {
  // const [model ,setModel] = useState(null)
  const [response,setResonse] = useState([]);
  const [questions,setQuestions] = useState([]);
  const [responses,setResponses] = useState([]);
  const [passage,setPassage] = useState("")
  const inputRef = useRef();
  // const [loadingChats , setLoadingChats] = useState(true)

//setPassage(`${data.data.text}`)
  useEffect(()=>{ 
    fetch("http://localhost:8080/getYourPdfText")
    .then((res)=>res.json())
    .then((data)=>{
      return(
        // console.log(data)
        setPassage(`${data.data}`)
      )
    })
  },[])



useEffect(()=>{
  // console.log("main function called ")
  AutomaticAnswers();
},[questions])


async function AutomaticAnswers(){
    const question = inputRef.current.value
    // const passage = `TensorFlow is an open-source machine learning framework developed by the Google Brain team. It's a highly flexible and scalable tool that facilitates the development and deployment of machine learning and deep learning models. TensorFlow is widely adopted in the artificial intelligence and machine learning communities due to its versatility and robustness. It supports a variety of machine learning tasks, including image and speech recognition, natural language processing, 
    // and more. 
    // TensorFlow offers high-level APIs like Keras, simplifying the process of building and training neural networks."`
    console.log(passage)
    const answers = await model.findAnswers(question, passage);
    // console.log(answers)
    const text = answers.length>0?answers[0].text:"Something Went Wrong Try Differnt Questions"
    const lastObject = responses.pop();
    const modifiedObject = {question:lastObject.question  , answer:text}
    const updatedResponse = [...responses,modifiedObject]
  
    setResponses(updatedResponse)
    setResonse([...response,text])
    inputRef.current.value=""
}



async function handleSubmitQuestion(e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Make a copy of the current responses array
  const updatedResponses = [...responses];

  // Get the current value of the input field
  const newQuestion = inputRef.current.value;

  // Update the responses state by adding a new response object
  setResponses([...responses, { question: newQuestion }]);

  // Update the questions state by adding the new question
  setQuestions([...questions, newQuestion]);

}
 console.log(passage)
  return (
            <>
                <>

                <section className="msger">
                  < ChatHeader/>
                  <div style={{margin:"10px"}}></div>
                    <div className="msger-chat">
                    <Message answer={"Hey , Now You can ask About Your Pdf "} ></Message>
                      {responses.map(({question,answer})=>{
                        return(
                          <>
                          <Message  answer={question} isQuestion={true}/>
                          {answer && <Message answer={answer} isQuestion={false}></Message>}
                          </>
                        )
                      })}
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

     </>
  )
}

export default Chat