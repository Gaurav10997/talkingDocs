import React from 'react'
// import { useEffect ,   } from 'react'

import "./Loader.css"

import {  Hourglass } from "react-loader-spinner"

function Loader() {
  return (
    <Hourglass
         visible={true}
         height="80"
         width="80"
        ariaLabel="hourglass-loading"
         wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
    />
  )
}

export default Loader