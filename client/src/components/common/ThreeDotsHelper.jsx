import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
function ThreeDotsHelper() {
  return (
        <ThreeDots 
          height="80" 
          width="80" 
          radius="9"
          color="#579ffb" 
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
    />
  )
}

export default ThreeDotsHelper;