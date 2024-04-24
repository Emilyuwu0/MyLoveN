import React, { useState } from "react";
import Modal from "./Components/Modal/Modal";
import './App.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleDivClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
    <div onClick={handleDivClick}>

    <div className="container noselect">
  <div className="canvas">
    <div className="tracker tr-1"></div>
    <div className="tracker tr-2"></div>
    <div className="tracker tr-3"></div>
    <div className="tracker tr-4"></div>
    <div className="tracker tr-5"></div>
    <div className="tracker tr-6"></div>
    <div className="tracker tr-7"></div>
    <div className="tracker tr-8"></div>
    <div className="tracker tr-9"></div>
    <div className="tracker tr-10"></div>
    <div className="tracker tr-11"></div>
    <div className="tracker tr-12"></div>
    <div className="tracker tr-13"></div>
    <div className="tracker tr-14"></div>
    <div className="tracker tr-15"></div>
    <div className="tracker tr-16"></div>
    <div className="tracker tr-17"></div>
    <div className="tracker tr-18"></div>
    <div className="tracker tr-19"></div>
    <div className="tracker tr-20"></div>
    <div className="tracker tr-21"></div>
    <div className="tracker tr-22"></div>
    <div className="tracker tr-23"></div>
    <div className="tracker tr-24"></div>
    <div className="tracker tr-25"></div>
    <div id="card">
    <div className="screen-card" onClick={ handleDivClick }>
        <div className="screen-card-header">
          <div className="screen-card-header-left">
            <div className="screen-card-header-button close"></div>
            <div className="screen-card-header-button maximize"></div>
            <div className="screen-card-header-button minimize"></div>
          </div>
          <div className="screen-card-header-right">
            
          </div>
        </div>
        <div className="screen-card-body">
          <div className="screen-card-body-item left">
            <div className="app-title">
              {/* <img src={img} className="width-img"/> */}
              <span className="title-card">꒰ᐢ. .ᐢ꒱ </span>
              <span className="app-description-card">Presioname </span>
              <span className="app-description2-card">Pls ₊˚⊹ </span>
            </div>
          </div>
       {/*    <div className="screen-card-body-item right">
            <div className="app-title-card">
              <span>{title2}</span>
              <span className="app-description">{description2}</span>
            </div>
          </div> */}
        </div>
      </div>

      
    </div>
  </div>
</div>

    </div>



    {modalOpen && <Modal onClose={closeModal} />}
  </div>
  )
}

export default App
