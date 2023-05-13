import PropTypes from 'prop-types';

const StaticCard = ({content, position}) => {
    return (
        <div className={position}>
            <p>{content}</p>
        </div>
    )
}

StaticCard.propTypes = {
    content: PropTypes.string,
    position: PropTypes.string
}

export default StaticCard;