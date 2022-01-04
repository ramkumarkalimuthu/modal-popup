import React from 'react'
import './Modal.css';

function Modal({ClosePopup}) {
    return (
        <div className='Modelcontainer'>

            <div className='modalheader'>
                <h4 className='headlist'>Add New Contact List</h4>
                <p className='closebtn' onClick={() => ClosePopup(false)}>X</p>
            </div>
            <div className='modelbody'>
                <form className='formlist'>

      <label>Enter your name:</label>
        <input type="text" className='Name' />

         <label>Enter your Mobile Number:</label>
        <input type="tel" className='tel' />
      
    </form>
                


            </div>

            <div className='modalfooter'>
                <button className='cancelbtn  onClick={() => ClosePopup(false)'>Cancel</button>
                <button className='subimt'>Submit</button>
            </div>

            
            
        </div>
    )
}

export default Modal
