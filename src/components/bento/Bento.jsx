import './style.css';
import Card from '../card/card';
import BeanArea from '../bean/BeanArea';

const Bento = () => {
    return (
        <div className="bento-container">
            <div className="margin-fix">
                <Card title="Full interest" content=" in web development. My main goal is join design and performance.">
                    <img src="/assets/figmaImg.png" alt="img" className="card-img" />
                </Card>
            </div>
            <div className="bento-wrapper">
                <div className="bento-inner-wrapper">
                    <Card title="Strong problem-solving " content="mindset, with keen eye for detail." orientation='column'>
                        <img src="/assets/problemImg.png" alt="img" className="card-img" />
                    </Card>
                </div>
                <div className="bento-inner-wrapper">
                    <div>
                        <BeanArea />
                    </div>
                    <div>
                        <Card title="Creative, " content="all the time finding new solutions.">
                            <img src="/assets/creativeImg.png" alt="img" className="card-img" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bento;