import './style.css';
import Card from '../card/card';
import BeanArea from '../bean/BeanArea';

const Bento = () => {
    return (
        <div className="bento-container">
            <Card className="card large-card" title="Full interest" content=" in web development. My main goal is join design and performance.">
                <img src="/assets/figmaImg.png" alt="img" className="card-img" />
            </Card>
            <div className="bento-wrapper">
                <div className="bento-inner-wrapper">
                    <Card className="card medium-card" title="Strong problem-solving " content="mindset, with keen eye for detail." orientation='column'>
                        <img src="/assets/problemImg.png" alt="img" className="card-img" />
                    </Card>
                </div>
                <div className="bento-inner-wrapper">
                    <div>
                        <BeanArea />
                    </div>
                    <div>
                        <Card className="card small-card" title="Creative, " content="all the time finding new solutions.">
                            <img src="/assets/creativeImg.png" alt="img" className="card-img" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bento;