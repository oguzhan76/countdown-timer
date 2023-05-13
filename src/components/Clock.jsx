import { useEffect, useState} from 'react';
import CardUnit from "./card";

const Clock = () => {
    const date = new Date(2023, 4, 21, 16, 47, 23);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [flipDays, setFlipDays] = useState(false);
    const [flipHours, setFlipHours] = useState(false);
    const [flipMinutes, setFlipMinutes] = useState(false);
    const [flipSeconds, setFlipSeconds] = useState(false);

    useEffect(() => {
        calculateRemainingTime();
    }, [])

    useEffect(() => {
        const interval = setInterval(calculateRemainingTime, 1000);
        return () => clearInterval(interval);
    }, [days, hours, minutes, seconds]);

    const calculateRemainingTime = () =>{
        const now = new Date();
        let remainingMS = date - now;

        const remDay = Math.floor(remainingMS / (1000*60*60*24));
        if (remDay !== days ){
            setDays(remDay);
            setFlipDays(prevState => !prevState);
        } 

        remainingMS -= remDay * 1000*60*60*24;
        const remHour = Math.floor(remainingMS / (1000*60*60));
        if(remHour !== hours) {
            setHours(remHour); 
            setFlipHours(prevState => !prevState);
        }

        remainingMS -= remHour * (1000*60*60);
        const remMins = Math.floor(remainingMS / (1000*60));
        if(remMins !== minutes) {
            setMinutes(remMins);
            setFlipMinutes(prevState => !prevState);
        }

        remainingMS -= remMins *1000*60;
        const remSecs = Math.floor(remainingMS / 1000);
        setSeconds(remSecs);
        setFlipSeconds(prevState => !prevState);
    }

    return (
        <div className="clock">
            <CardUnit flip={flipDays} content={days} unit={'days'}/>
            <CardUnit flip={flipHours} content={hours} unit={'hours'}/>
            <CardUnit flip={flipMinutes} content={minutes} unit={'minutes'}/>
            <CardUnit flip={flipSeconds} content={seconds} unit={'seconds'}/>

        </div>
    )
}

export default Clock;