import PropTypes from 'prop-types';

const AnimatedCard = ({content, animation, preventAnim}) => {
    return (
        <div className={`flipcard ${animation} ${preventAnim}`}>
            <p>{content}</p>
        </div>
    )
}

AnimatedCard.propTypes = {
    content: PropTypes.string,
    animation: PropTypes.string,
    preventAnim: PropTypes.string
}

export default AnimatedCard;