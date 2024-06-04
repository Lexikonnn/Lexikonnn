import './styles/Process.css';

const Process = (props) => {
    return (
        <div className='process-container'>
            <div>
                <div className='process-title-container'>
                    {props.title}
                </div>
                <div className='process-sub-container'>
                    {props.first}
                </div>
                <div className='process-sub-container'>
                    {props.secound}
                </div>
            </div>

            <div>
                {props.progressBar}
            </div>
        </div>
    );
}

export default Process;