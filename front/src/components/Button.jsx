import React from 'react'

const Bouton = ({onClick, textButton, classbutton }) => {
  return (
    <div className={classbutton}>

      <button onClick={ onClick }  >{textButton}</button>

    </div>
    
  )
}

export default Bouton;