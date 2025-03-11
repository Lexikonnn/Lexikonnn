import Card from "../card/card";
import './style.css';

const CardList = () => {
    return (
        <div className='card-list'>
            <Card
                title="Front-End Development"
                content="I build fast, interactive, and accessible web applications using JavaScript,
         React, Next.js, and TypeScript. Skilled in HTML, CSS, Tailwind,
          and maintaining clean, efficient code with Git."
            >
            </Card>
            <Card
                title="UI/UX"
                content="I craft intuitive, visually appealing, and user-friendly interfaces with a focus on accessibility and seamless experiences.
         Skilled in design systems, responsive layouts, and interaction design, blending creativity with functionality."
            >
            </Card>
            <Card
                title="Soft Skills"
                content="Strong problem-solving mindset, with a keen eye for detail and efficiency.
         Effective team player and communicator. Adaptable, eager to learn new technologies, and always striving for innovation and improvement."
            >
            </Card>
        </div>
    );
}

export default CardList;