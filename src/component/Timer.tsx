// Timer.tsx
import React, { FC, HTMLAttributes, useEffect, useState } from 'react';

interface TimerProps extends HTMLAttributes<HTMLDivElement> {
    initialHours: number;
    initialMinutes: number;
    initialSeconds: number;
}

const Timer: FC<TimerProps> = ({ initialHours, initialMinutes, initialSeconds, ...rest }) => {
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(seconds + 1);

        if (seconds === 59) {
            setMinutes(minutes + 1);
            setSeconds(0);

            if (minutes === 59) {
            setHours(hours + 1);
            setMinutes(0);
            }
        }
        }, 1000);

        return () => clearInterval(interval);
    }, [hours, minutes, seconds]);

    return (
        <div {...rest}>
        {/* Display the timer values */}
        {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </div>
    );
};

export default Timer;
