import React from 'react'

function Form(props, hasButton ) {
    hasButton = true
  return (
    <div><form action="">
                <label >{props.label1}</label> <input type="text" placeholder={props.placeholder1}/> 
                 <label >{props.label2}</label> <input type="text" placeholder={props.placeholder2}/>
                {hasButton && <button type="button">{props.textButton}</button>}
                 
          </form>
 

    </div>
  )
}
export default Form