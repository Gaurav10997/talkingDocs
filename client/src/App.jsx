import React, { useEffect, useState } from 'react';
import Upload from './components/Upload/Upload'

import  * as tfjs from "@tensorflow/tfjs"
import * as qna from "@tensorflow-models/qna"

import { Route,Routes } from 'react-router';
import Chat from './components/Chat';
import Loader from './components/common/Loader';

const App = () => {
    
   const [isLoading,setIsLoading] = useState(true)
   const [model ,setModel] = useState(null)
   async function LoadModel(){ 
    const loadmodel = await qna.load()
    setModel(loadmodel)
    setIsLoading(false)
  
  }
  
  useEffect(()=>{
      LoadModel()
  },[])

  return (
    <>
{isLoading?<Loader/>:<Routes>
        <Route path='/' element={<Upload></Upload>}>

        </Route>
        <Route path='/chat' element={<Chat model = {model}/>}>
           </Route>
      </Routes>
  }
{     

    
    }
    </>

  );
};

export default App;
