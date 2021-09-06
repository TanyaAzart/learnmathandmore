import React from 'react';
import Skype from './images/skype.png';
import Phone from './images/phone.png';
import WhatsApp from './images/whatsapp.png';
import Telegram from './images/telegram.jpg';
import Email from './images/email.png';




const Info = () => {
    return ( 
    <div className="info">
        <div className="hero"></div>
        <div className="col-two">
            <div className="col-content">
            <p><strong>"TEN! PIONEERS" :</strong></p>
            <p>Фотография, которую вы видите в верхней части этой страницы, мне очень дорога. Она была сделана в 2017 году в Университете Штата Аризона (США) во время Первой практической конференции учителей английского языка, прошедших обучение по программе "Teach English Now!", созданной в стенах Университета.</p>
            <p><strong>Китай, Россия, Ирак, Вьетнам, Индия, Доминикана, Эквадор, Панама, Ливан, США, Япония</strong> и даже <strong>Тринидад и Тобаго</strong>  - вот перечень стран, в которых живут и работают люди, запечатленные на этой фотографии. Надеюсь, вы меня на ней узнали :)</p>
            <p>Если вы захотите стать моим учеником или ученицей, вы можете найти меня здесь:</p>
                <ul>
                <li className="contacts"><div><img alt ={'Skype icon'} src={Skype} style={{height:3+'vw'}}/></div> <p><strong> ' tatiana . azarchenko '</strong></p></li>
                <li className="contacts"><div><img alt ={'Phone icon'} src={Phone} style={{height:3+'vw'}}/></div><p><strong> +34 694 49 43 66</strong></p></li>
                <li className="contacts"><div><img alt ={'WhatsApp icon'} src={WhatsApp} style={{height:3+'vw'}}/></div><p><strong> +34 694 49 43 66</strong></p></li>
                <li className="contacts"><div><img alt ={'Telegram icon'} src={Telegram} style={{height:3+'vw'}}/></div><p><strong> +34 694 49 43 66</strong></p></li>
                <li className="contacts"><div><img alt ={'Email icon'} src={Email} style={{height:3+'vw'}}/></div><p><strong> info@learnmathandmore.org</strong></p></li>
                </ul>
            <p><strong>Если Вы живете в Европе, цена индивидуального занятия составит</strong> - <strong>15 евро за час </strong>при поурочной оплате. При оплате пакетом за 8 занятий вперед цена снижается до 100 евро за пакет. Если Вы живете в другой части света, цену урока и валюту платежа мы обсудим при встрече. В любом случае, первое занятие - бесплатно.</p>
            
            <p><strong>Цена группового занятия</strong> зависит от численности группы и способа проведения занятий, а потому определяется при наборе группы.</p>
            <p>До встречи!  See you!</p>            
        </div>            
        </div>
    </div>
    )
};

export default Info;