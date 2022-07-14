import React from 'react'

const Area = (props) => {
  return (
    <div className='app-area' style={{height:props.data.length*40}}>
      {props.children} 
    </div>
  )
}

export default Area;

//neden biz yukarda props.children kullandik ?