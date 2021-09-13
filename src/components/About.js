import React from 'react';
import Link from './Link.js';
import MAN from './images/man.png';
import MHTI from './images/rhtu.png';
import MSU from './images/msu.png';
import ASU from './images/asu.png';
import Academia from './images/academia.jpeg';
import VIU from './images/viu.png';
import Edx from './images/edx.png';
import Coursera from './images/coursera.png';
import Volvo from './images/volvo.png';
import MMM from './images/mmm.png';
import LG from './images/lg.png';
import Honeywell from './images/honeywell.png';
import McCormick from './images/mccormick.png';
import Manuel from "./images/manuel.png";
import Alfried from "./images/alfried.png";
import Olga from './images/popova.png';
import Dixon from "./images/dixon.png";


const About =() =>{

    return (
        <div className="about">
            <div className="hero"></div>
            <div className="col-two">
            <div className="col-content bio">
                    <h2><strong><em>Я родилась...</em></strong></h2>
                    <p>...в большом сибирском городе в разгар зимы. Мое стремление к поиску новых пространств, полных солнечного света, тепла и свежего воздуха, родом оттуда. Впрочем, это у нас семейное, поэтому до окончания школы я успела пожить с родителями на Кавказе и в Крыму, а после приехала на учебу в Москву, где и осела на долгие годы. </p>
                    <h2><strong><em>Я училась...</em></strong></h2>
                    <p>...с большим интересом, много и весьма самостоятельно. Родители так и не выяснили, каким образом я научилась читать. Я тоже этого не помню. Зато помню, что английский язык я начала учить задолго до появления этого предмета в моем школьном расписании, случайно обнаружив дома англо-русский словарь. Любопытство и тяга к неведомому приводили меня в разные интересные места:</p>

                    <ul className="flex-list">

                        <div className="school">
                        <p>- в секцию кибернетики <a href="http://crimea-man.ru/" rel="noreferrer" target="_blank"><strong> Малой Академии Наук школьников Крыма</strong></a></p>
                        <a href="http://crimea-man.ru/" rel="noreferrer" target="_blank"><img src={MAN} alt={"MAN logo"}/></a>
                        </div>

                        <div className="school">
                        <p>- на кафедру электрохимии<a href="https://www.muctr.ru/" rel="noreferrer" target="_blank"><strong> Менделеевского университета</strong></a></p>
                        <a href="https://www.muctr.ru/" rel="noreferrer" target="_blank"><img src={MHTI} alt={"MHTI logo"}/></a>
                        </div>

                        <div className="school">
                        <p>- на<a href="http://www.ffl.msu.ru/" rel="noreferrer" target="_blank"><strong> факультет иностранных языков МГУ</strong></a></p>
                        <a href="http://www.ffl.msu.ru/" rel="noreferrer" target="_blank"><img src={MSU} alt={"MSU logo"} style={{height:4+'vw'}}/></a>
                        </div>

                        <div className="school">
                        <p>- в <a href="http://www.manuelbetanzos.com" rel="noreferrer" target="_blank"><strong>Академию фламенко, Испания</strong></a></p>
                        <a href="https://imanet.org" rel="noreferrer" target="_blank"><img src={Academia} alt={"Academia logo"} style={{height:4+'vw'}}/></a>
                        </div>

                        <div className="school">
                        <p>- в <a href="https://learnenglish.asu.edu" rel="noreferrer" target="_blank"><strong>Университет штата Аризона, США</strong></a></p>
                        <a href="https://globallaunch.asu.edu/" rel="noreferrer" target="_blank"><img src={ASU} alt={"ASU logo"}/></a>
                        </div>

                        <div className="school">
                        <p>- в <a href="https://www.universidadviu.com" rel="noreferrer" target="_blank"><strong>Международный Университет Валенсии, Испания</strong></a></p>
                        <a href="https://www.universidadviu.com" rel="noreferrer" target="_blank"><img src={VIU} alt={"VIU logo"} style={{height:4+'vw'}}/></a>
                        </div>

                    </ul>
                    <p>Однако, как выяснилось, у этой дороги нет конца! Потому, что в современном мире существуют интернет-платформы, такие как <a href="https://www.coursera.org/" rel="noreferrer" target="_blank"><img src={Coursera} alt={"Coursera logo"}/></a> или <a href="https://www.edx.org/" rel="noreferrer" target="_blank"><img src={Edx} alt={"edX logo"}/></a>, на которые выкладываются замечательные и, зачастую, совершенно бесплатные (<strong>в большинстве своем, англоязычные</strong>) курсы от лучших университетов мира. Благодаря этим курсам, а также <a href="https://www.learnenough.com" rel="noreferrer" target="_blank"><strong>отличным пособиям от Майкла Хартла (Michael Hartl)</strong></a>, я приобрела новое увлекательное хобби: программирование и веб-дизайн. Коды для своего сайта, на котором мы с вами сейчас беседуем, я писала сама (конструктивная критика приветствуется).
                    </p>

                    <h2><strong><em>Я работала...</em></strong></h2>
                    <p>...в российских подразделениях известных многонациональных корпораций:</p>
                    <div className="logo">
                    <img src={Volvo} alt={'Volvo logo'}/>
                    <img src={MMM} alt={'3M logo'}/>
                    <img src={LG} alt ={'LG logo'} style={{height:1.7+'em'}}/>
                    <img src={Honeywell} alt={'Honeywell logo'}/>
                    <img src={McCormick} alt={'McCormick logo'} style={{height:2+'em'}}/>
                    </div>
                    <p>попасть в которые и быть успешной мне помог мой хороший друг  - <strong>английский язык</strong>. А когда  я окончательно смирилась с мыслью, что корпорации мне больше не интересны, он же помог мне расстаться с ними.</p>
                    <h2><strong><em>Я путешествовала...</em></strong></h2> 
                    <p>...в свободное от учебы и работы время. И хотя его было немного, я успела побывать в интереснейших уголках мира. До некоторых из них я добралась благодаря знанию английского языка, до иных - испанского. Так или иначе, в верности поговорки "язык до Киева доведет" я убедилась на практике. О своих путешествиях я рассказываю <Link href="/blog"><strong>здесь.</strong></Link></p>
                    <h2><strong><em>Я встретила...</em></strong></h2> 
                    <p>...на своем пути замечательных людей, которые изменили мою жизнь. Хочу выразить им свою признательность еще раз:</p>

                <div className="people">
                    <p>- великолепный артист и гениальный преподаватель танца фламенко <a href="http://www.manuelbetanzos.com" rel="noreferrer" target="_blank"><strong>Manuel Betanzos</strong></a> (Севилья, Испания), благодаря которому в мою жизнь вошла чудесная страна и ее чудесное исскусство;</p>
                        <div className="portrait">
                            <a href="http://www.manuelbetanzos.com" rel="noreferrer" target="_blank"><img src={Manuel} alt={'Manuel portrait'}/></a>
                        </div>
                </div>

                <div className="people">
                <p>- друг и соратник <a href="https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D0%BB,_%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80" rel="noreferrer" target="_blank"><strong>Виктора Франкла</strong></a> - основателя "Третьей Венской школы психоанализа", экзистенциальный психотерапевт <a href="http://www.laengle.info" rel="noreferrer" target="_blank"><strong> Dr. Alfried Längle</strong></a> (Вена, Австрия), обучивший российских психологов и психотерапевтов идеям и методам экзистенциального анализа, благодаря чему я однажды смогла разглядеть саму себя и свой путь;</p>
                    <div className="portrait">
                    <a href="http://www.laengle.info" rel="noreferrer" target="_blank"><img src={Alfried} alt={'Alfried portrait'}/></a>
                    </div>
                </div>
                <div className="people">
                    <p>- психолог, психотерапевт, логотерапевт <a href="http://www.doctor-popova.ru/" rel="noreferrer" target="_blank"><strong> Ольга Федоровна Попова</strong></a> (Москва, Россия), протянувшая мне руку помощи в критический момент и поверившая в меня тогда, когда я сама поверить в себя была еще не готова;</p>
                        <div className="portrait">
                        <a href="http://www.doctor-popova.ru/" rel="noreferrer" target="_blank"><img src={Olga} alt={'Olga portrait'}/></a>
                        </div>
                </div>
                <div className="people">
                    <p>- учитель учителей, автор курса "Teach English Now!" на <a href="https://www.coursera.org/specializations/tesol" rel="noreferrer" target="_blank"><img src={Coursera} alt="Coursera logo"/></a>, преподаватель Университета Аризоны,<a href="https://www.facebook.com/dr.shane.dixon" rel="noreferrer" target="_blank"> <strong>Dr. Shane Dixon</strong></a> (Финикс, США), научивший меня учить и благословивший на путь преподавания.</p>
                        <div className="portrait">
                        <a href="https://www.facebook.com/dr.shane.dixon" rel="noreferrer" target="_blank"><img src={Dixon} alt={'Shane portrait'}/></a>
                    </div>
                </div>     
            </div>
        </div>
     </div>
    )
}

export default About;