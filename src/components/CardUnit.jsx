import PropTypes from 'prop-types';
import AnimatedCard from './AnimatedCard';
import StaticCard from './StaticCard';

const MakeTwoDigits = (n) => {
    if(n === undefined) return '--';
    return ("0" + n).slice(-2);
}

const CardUnit = ({unit, content, flip}) => {

    let prevContent = content + 1;
    if(unit == 'hours'){
        prevContent = prevContent === 25 ? 0 : prevContent;
    } else if (unit === 'seconds' || unit === 'minutes') {
        prevContent = prevContent === 60 ? 0 : prevContent;
    }

    const animContent1 = flip ? prevContent : content;
    const animContent2 = !flip ? prevContent : content;

    const anim1 = flip ? 'fold' : 'unfold';
    const anim2 = !flip ? 'fold' : 'unfold';

    return (
        <div>    
            <div className="card-container">
                <StaticCard content={MakeTwoDigits(content)} position={'upperCard'}/>
                <StaticCard content={MakeTwoDigits(prevContent)} position={'lowerCard'}/>
                <AnimatedCard content={MakeTwoDigits(animContent1)} animation={anim1}/>
                <AnimatedCard content={MakeTwoDigits(animContent2)} animation={anim2}/>
            </div>
            <div className='card-label'>
                <p>{unit}</p>
            </div>
        </div>
    )
}

CardUnit.propTypes = {
    content: PropTypes.number,
    unit: PropTypes.string,
    flip: PropTypes.bool
}

export default CardUnit;