import propTypes from 'prop-types'

const ResumeBlock = (props) => {
    return (
        <div>
            <h4 className="small-title">{props.title}</h4>
            <div className='wrapper-col'>
                <p className='basic-text'>{props.content}</p>
            </div>
        </div>);
}

ResumeBlock.propTypes ={
    title: propTypes.string,
    content: propTypes.string,
}

ResumeBlock.defaultProps ={
    title: "TITLE",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
}

export default ResumeBlock;