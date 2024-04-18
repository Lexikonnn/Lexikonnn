import propTypes from 'prop-types'

const PresentYear = () => {
        return new Date().getFullYear();
}

const XpComponent = (props) => {
    return (
        <div className='container-xp'>
            <i className='circle'>{props.year}</i>

            <div className='wrapper-xp'>
                <h6 className='mid-text'>{props.role}</h6>
                <p className='basic-text'>{props.project}</p>
            </div>
        </div>
    );
}

XpComponent.propTypes ={
    year: propTypes.number,
    role: propTypes.string,
    project: propTypes.string,
}

XpComponent.defaultProps ={
    year: PresentYear(),
    role: "Role",
    project: "Project name",
}

export default XpComponent;