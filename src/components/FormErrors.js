import React from 'react'

export default function FormErrors(props) {
  
    return(
        <>
        {Object.keys(props.formErrors).map((fieldName, index ) => {

        
            if(props.formErrors[fieldName].length > 0){

                

                    return(
                        <p key={index}>{props.formErrors[fieldName]}</p>
                        
                        )
                
            }
            else{
                return '';
            }

            })}
        </>
    )
    
  
}
