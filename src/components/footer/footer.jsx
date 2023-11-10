import { useState } from 'react';
import './footer.scss';

function FooterLogo({ logoSrc, logoAlt }) {
    return (
        <div className="footer__logo">
            <img src={logoSrc} alt={logoAlt} />
        </div>
    );
}

function FooterRights({ rightsText }) {
    return ( <p className="footer__text">{new Date().getFullYear()} &copy;{rightsText}</p> );
}

function FooterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [budget, setBudget] = useState('1000');
    const [describe, setDescribe] = useState('');

    function handleSubmit(e) {
        e.preventDefault();//Запретить браузеру перезагружать страницу

        const form = e.target;// Чтение данных формы
        const formData = new FormData(form);

        fetch('/some-api', { method: form.method, body: formData });// Передать formData напрямую

        const formJson = Object.fromEntries(formData.entries());// Или работать как с простым объектом
        console.log(formJson);
    }

    return (
        <form method='post' onSubmit={handleSubmit} className="footer__form" id='form1'>
            <input className="form__name" type="text"
                value={name} onChange={e => setName(e.target.value)}
                name="formName" placeholder="Name"
            />
            <input
                className="form__email" type="email"
                value={email} onChange={e => setEmail(e.target.value)}
                name="formEmail" placeholder="Email"
            />
            <label className="budget__label">Budget $ {budget}    
                <input
                    className="form__budget" type="range" min="100" max="10000" name="formBudget"
                    value={budget} onChange={e => setBudget(e.target.value)}
                />
            </label>
            <textarea
                className="form__describe"
                value={describe} onChange={e => setDescribe(e.target.value)}
                name="describe" 
                placeholder="Describe youre project..."
            />
            <div className="footer__button">
                <button type='submit'>Send Message</button>
            </div>
        </form>
    );
}

export default function Footer() {
    return (
        <footer className="footer">
            <div className="conteiner">
                <FooterForm />
                <FooterLogo logoSrc={'/footer-logo.png'} logoAlt={'MNM logo'}/>
                <FooterRights rightsText={' Minimal All rights reserved.'} />
            </div>
        </footer>
    );
} 