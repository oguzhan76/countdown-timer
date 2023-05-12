import { useEffect, useState, useCallback } from 'react';
import Card from "./card";

const MakeTwoDigits = (n) => {
    if(n === undefined) return '--';
    return ("0" + n).slice(-2);
}

const Clock = () => {
    const date = new Date(2023, 4, 12, 16, 47, 23);
    const [days, setDays] = useState(0);
    const [flipDays, setFlipDays] = useState(false);

    const [hours, setHours] = useState(0);
    const [flipHours, setFlipHours] = useState(false);

    const [minutes, setMinutes] = useState(0);
    const [flipMinutes, setFlipMinutes] = useState(false);

    const [seconds, setSeconds] = useState(0);
    const [flipSeconds, setFlipSeconds] = useState(false);

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
        console.log('remHours: ', remHour);
        console.log('hours: ', hours);
        console.log('parent:', flipHours);
        if(remHour !== hours) {
            console.log('bunlar esit degil')
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
        // console.log(flipSeconds);
        setFlipSeconds(prevState => !prevState);
        

        setTimeout(calculateRemainingTime, 1000);
    }

    useEffect(() => {

        calculateRemainingTime();

    
    }, []);

    useEffect(() => {
        console.log('hours updated');
    }, [hours])

    return (
        <div className="clock">

            <Card flip={flipHours} content={MakeTwoDigits(hours)} />

        </div>
    )
}

export default Clock;
// <Card flip={flipDays} content={MakeTwoDigits(days)} />
// <Card flip={flipMinutes} content={MakeTwoDigits(minutes)} />
// <Card flip={flipSeconds} content={MakeTwoDigits(seconds)} />