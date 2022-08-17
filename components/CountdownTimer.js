import { useCountdown } from '@/hooks/useCountdown';
import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { Container, Logo, Button } from '.';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>MINT TODAY!!!</span>

    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Container className={'bg-[#b51f35] w-full flex flex-col py-2  items-center justify-center'}>
      <h2 className='text-xl mr-3 text-center'>Countdown to mint </h2>
      <div className='flex items-center justify-center'>
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    </Container>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
