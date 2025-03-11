import React from "react";
import TitleSection from "../components/titleSection/TitleSection";
import Btn from "../components/button/Btn";
import CustomShape from '../components/customShape/customShape';
import Bento from "../components/bento/Bento";
import TechSection from "../components/techSection/TechSection";
import ReferenceSection from "../components/referenceSection/ReferenceSection";
import ContentNav from "../components/contentNav/ContentNav";
import BeanArea from "../components/bean/BeanArea";

const Home = () => {
    return (
        <div>
            <div className="landing-section">
                <div className="left-container">
                    <div>
                        <h3 className="inter md-text">Hello, I'm Honza</h3>
                        <h1 className="manrope xxl-text">Born to design & develop webs.</h1>
                        <h3 className="inter md-text">
                            Frontend Developer with a keen eye for design, skilled in React/Next.js and focused on clean UI.
                        </h3>
                    </div>
                    <div className="button-wrapper">
                        <Btn size='lg' content='Hire Me?' />
                    </div>
                </div>
                <div className="right-container">
                    <CustomShape />
                </div>
            </div>
            <ContentNav />
            <div className="section" id="my-stack">
                <TitleSection text="What I use?" />
                <div className="tech-container">
                    <TechSection title="FRAMEWORKS" content="Good experience in React.Js and Next.Js" icon="/assets/reactIcon.svg" />
                    <TechSection title="NODE.JS" content="Basics knowledge of Express.Js" icon="/assets/nodeIcon.svg" />
                    <TechSection title="TYPESCRIPT" content="Knowledge of strict data types and explicit namenig" icon="/assets/tsIcon.svg" />
                </div>
            </div>
            <div className="section" id="about-me">
                <TitleSection text="What am I capable of?" />
                <Bento />
            </div>
            <div className="section" id="references">
                <TitleSection text="Let's take a look." />
                <div className="references-container">
                    <ReferenceSection
                        title="Boliga.cz"
                        content="Boliga.cz is a web app designed for amateur badminton players to organize, manage, and compete in league matches effortlessly."
                        image="/assets/boliga.png"
                        imagePosition="left"
                    />
                    <ReferenceSection
                        title="Fantasy-academy.com"
                        content="Fantasy Academy is the ultimate platform for football enthusiasts looking to master the art of strategic betting. Whether you’re a beginner or a seasoned bettor, our academy takes you deep into the intricate world of football analytics and strategy."
                        image="/assets/progress.png"
                        imagePosition="right"
                    />
                </div>
            </div>
            <div className="section" id="contact">
                <TitleSection text="NOW YOUR TURN!" />
                <div className="contact-wrapper">
                    <Btn content='Get in touch' size='lg' />
                    <p className="sm-text alert inter">Warning, this button can affect you dramatically!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;