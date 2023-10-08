import React, { useEffect, useState } from 'react';
import Upload from './components/Upload/Upload'
import { useContext } from 'react';
import  * as tfjs from "@tensorflow/tfjs"
import * as qna from "@tensorflow-models/qna"

import { Route,Routes } from 'react-router';
import Chat from './components/Chat';
import Loader from './components/common/Loader';
import Login from "./components/authentication/Login"
import AuthContext from './components/store/AuthContext';

const App = () => {
    const authCtx = useContext(AuthContext)
   const [isLoading,setIsLoading] = useState(true)
   const [model ,setModel] = useState(null)
   const [token , setToken] = useState("")
   async function LoadModel(){ 
    const loadmodel = await qna.load()
    setModel(loadmodel)
    setIsLoading(false)
  }
  useEffect(()=>{
      LoadModel()
  },[])

   console.log(authCtx.token)
  return (
    <>
    {!authCtx.isLoggedIn? <Login></Login>:isLoading?<Loader/>:<Routes>
        <Route path='/' element={<Upload></Upload>}>

        </Route>
        <Route path='/chat' element={<Chat model = {model}/>}>
           </Route>
      </Routes>
  } 
   
    </>

  );
};

export default App;
