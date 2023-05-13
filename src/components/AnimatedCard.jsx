import PropTypes from 'prop-types';

const AnimatedCard = ({content, animation}) => {
    return (
        <div className={`flipcard ${animation}`}>
            <p>{content}</p>
        </div>
    )
}

AnimatedCard.propTypes = {
    content: PropTypes.string,
    animation: PropTypes.string
}

export default AnimatedCard;