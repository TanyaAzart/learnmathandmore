import React from 'react';
import Link from './Link';
import Docs from './Docs';
import Tanya from './images/Tanya_Eng.jpg';

const Main = () => {
    return (
    <div className="home">
        <div className="hero flowers"></div>
        <div className="col-two">
        <div className="col-content">
        
        <div className="author">
        <p><strong>WELCOME !  HOLA !  ДОБРО ПОЖАЛОВАТЬ !</strong></p>
                    <div className="author-portrait">
                        <img src={Tanya} alt={'Author portrait'}/>
                        </div>
                </div>
        <p>Рада приветствовать Вас на моем персональном сайте! Меня зовут <strong>Татьяна Азарченко</strong>, и я - учитель. Правда, о том, что я учитель, <Link href="/about"><strong>я узнала не сразу</strong></Link>. Зато я всегда знала, что хочу открывать и осваивать новые просторы. Я думаю, мне удалось осуществить свою мечту. Я хочу помочь Вам сделать то же самое.</p>
        <p>Я буду рада видеть Вас моим учеником или ученицей, если Вам уже исполнилось восемь. Что касается верхней возрастной планки, ее нет и быть не может. Пока мы живы, мы все время учимся! Что именно я изучаю сейчас, я расскажу Вам при нашей встрече. Что я изучала раньше, Вы можете узнать <Link href="/about">здесь.</Link></p>
        <p>Я помогу Вам научиться говорить, читать и писать на английском или испанском языках, а также освоить математику (алгебру, геометрию, статистику, комбинаторику...), химию и физику. Не многовато ли для одного учителя, спросите Вы? Может быть и многовато, но все это мне было интересно, а потому изучено по пути к Вам. Дипломы и сертификаты, собранные по дороге, Вы можете хорошенько рассмотреть, если наведете мышку на картинки ниже:</p>
            
            <Docs />  
                                        
        <p>Я пока не знаю, что именно Вам требуется освоить и зачем (Вы расскажете мне об этом  при личной встрече), но думаю, что Ваш интерес, вполне вероятно, упомянут в этом списке:</p>
        <ul>
            <li>хочу написать контрольную на отлично;</li>
            <li>хочу успешно сдать экзамены;</li>            
            <li>хочу получить хорошее образование;</li>
            <li>хочу найти интересную работу;</li>
            <li>хочу заниматься наукой;</li>
            <li>хочу путешествовать по миру;</li>
            <li>хочу обрести друзей и единомышленников в разных частях света;</li>
            <li>хочу создать семью с иностранцем (иностранкой);</li>
            <li>хочу читать Шекспира ("Гарри Поттера",...) и Сервантеса (Гарсия Маркеса,...) в подлиннике;</li>
            <li>хочу жить, где хочу;</li>
            <li>Альцгеймер - не хочу!!!</li>
        </ul>
        <p>Так или иначе, похоже, что причин закатать рукава и взяться за учебу больше, чем достаточно, не так ли? Предлагаю объединить усилия и ресурсы: с Вас <Link href="/info"><strong>скромное вознаграждение</strong></Link> и выполнение посильных заданий, с меня эффективная помощь в освоении языков и точных наук. </p>
        <p>Важное обстоятельство: в данный период моей жизни я выполняю пункт "хочу жить, где хочу", а потому уроки даю главным образом <strong>в Skype и Zoom</strong>. Однако, если Вы находитесь в той же части Вселенной, где окажусь и я, буду рада принять Вас у себя дома.</p>
        <p><strong>ДО ВСТРЕЧИ!  HASTA PRONTO!  SEE YOU SOON!</strong></p>
        </div>
     </div>
    </div>
    )
};

export default Main;