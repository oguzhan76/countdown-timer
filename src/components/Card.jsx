import PropTypes from 'prop-types';

const AnimatedCard = ({content, animation, position}) => {
    return (
        <div className={`flipcard ${animation}`}>
            <p>{content}</p>
        </div>
    )
}

const StaticCard = ({content, position}) => {
    return (
        <div className={position}>
            <p>{content}</p>
        </div>
    )
}

const Card = ({content, flip}) => {
    console.log('flipflop:', flip);
    const anim1 = flip ? 'fold' : 'unfold';
    const anim2 = !flip ? 'fold' : 'unfold';

    return (
        <div className="card-container">
            <StaticCard content={content} position={'upperCard'}/>
            <StaticCard content={content} position={'lowerCard'}/>
            <AnimatedCard content={content} animation={anim1}/>
            <AnimatedCard content={content} animation={anim2}/>
        </div>
    )
}

Card.propTypes = {
    content: PropTypes.string
}

export default Card;