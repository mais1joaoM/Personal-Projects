import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import TeacherForm from '../../pages/TeacherForm';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/50158494?s=460&u=6740510d127575531cd42054e15a94646c71566e&v=4" alt="João Marcos"></img>
                <div>
                    <strong>João Marcos</strong>
                    <span>Dev RPA</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de RPA
                <br/><br/>
                Apixonado por criar bots avançados com intuito de automatizar seus processos
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>

                <button type="button">
                    <img src={WhatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;