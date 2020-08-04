import React from 'react';
//import { Link } from 'react-router-dom';

//import backIcon from '../../assets/images/icons/back.svg';
//import logoImage from '../../assets/images/logo.svg';

import PageHeader from '../../components/PageHeader';

//import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';
//import { stringify } from 'querystring';

import TeacherItem from '../../components/TeacherItem';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponiveis!">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;