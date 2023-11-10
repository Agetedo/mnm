import { useState } from 'react';
import './get.scss';
import { createPortal } from 'react-dom';
import closeIcon from '/modal-close-icon.svg';
import mnmLogo from '/logo.svg';

function GetText({ text }){
  return(
    <><p className="get__text">{text}</p></>
  );
}

function ModalContent({ onClose }) {
  const [send, setSend] = useState('');

  function handleSend(e) {
    e.preventDefault();//Запретить браузеру перезагружать страницу

    const form = e.target;// Чтение данных формы
    const formData = new FormData(form);

    fetch('/some-api', { method: form.method, body: formData });// Передать formData напрямую

    const formJson = Object.fromEntries(formData.entries());// объект JSON
    console.log(formJson);
  }

  return (
    <div className="get-modal">
      <div className="get-modal__content">

        <img src={mnmLogo} alt={"MNM logo"} id="modalLogo" />
        <p>Let Us help Your company grow!</p>
        <button id="modalClose" onClick={onClose}>Close
          <img src={closeIcon} alt={"close icon"} />
        </button>

        <form method="post" onSubmit={handleSend} id="form2">
          <input
            type="email"
            value={send} onChange={e => setSend(e.target.value)}
            name="formSend" placeholder="Enter your email"
          />
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
}

function GetModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="modal-container">
      <button className="get-button" onClick={() => setShowModal(true)}>
        Get in Touch
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
  );
}

export default function Get() {
  return (
    <div className="get">
      <div className="conteiner">
        <GetText  
        text={'MINIMAL is a full-service digital creative agency located in Ontorio Canada. We focus on design,\
        consulting, technology, and photography. We\'ve been building unique digital products, platforms\
        and experiences for the past 6 years. Let Us help Your company grow.'}/>
        <GetModal />
      </div>
    </div>
  );
}