import React from 'react'

export default function CallToAction() {
  
  return (
    <div className='calltoaction'>
        <button onClick={ 
          () => document.getElementById('form-1').scrollIntoView({behavior: "smooth"}) 
          }>
          <strong>Try it free 7 days </strong> 
          then $20/mo. thereafter</button>
    </div>
  )
}
