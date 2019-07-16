import React from 'react';
import './ImageLinkForm.css'

function ImageLinkForm ({ onInputChange, onButtonSubmit }) {
  return (
    <div>
      <div>
        <p className="f3">
          {"Face--Box will put a box over your face! Give it a try!"}
        </p>
      </div>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" placeholder="Enter URL Here!!!" onChange={onInputChange}/>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm