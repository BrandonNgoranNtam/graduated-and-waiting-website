import React from 'react';
import './FlipClock.css'; // Assuming you will create a FlipClock.css for styles

const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  let currentDigit = digit;
  let previousDigit = digit - 1;

  if (unit === 'days') {
    previousDigit = previousDigit < 0 ? 0 : previousDigit; // Don't allow negative days
  } else if (unit !== 'hours') {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  }

  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  const digit1 = shuffle ? previousDigit : currentDigit;
  const digit2 = !shuffle ? previousDigit : currentDigit;

  const animation1 = shuffle ? 'fold' : 'unfold';
  const animation2 = !shuffle ? 'fold' : 'unfold';

  return (
    <div className="flipUnitContainer">
      <StaticCard position={'upperCard'} digit={currentDigit} />
      <StaticCard position={'lowerCard'} digit={previousDigit} />
      <AnimatedCard digit={digit1} animation={animation1} />
      <AnimatedCard digit={digit2} animation={animation2} />

    </div>
  );
};

class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const { graduationDate } = this.props;

    console.log('graduationDate', graduationDate);
    const now = new Date();
    const graduation = new Date(graduationDate);
    const diffInSeconds = Math.floor((now - graduation) / 1000);

    const days = Math.floor(diffInSeconds / 86400); // Calculate days
    const hours = Math.floor((diffInSeconds % 86400) / 3600); // Remaining hours
    const minutes = Math.floor((diffInSeconds % 3600) / 60); // Remaining minutes
    const seconds = Math.floor(diffInSeconds % 60); // Remaining seconds

    // Update state for days, hours, minutes, and seconds
    if (days !== this.state.days) {
      const daysShuffle = !this.state.daysShuffle;
      this.setState({ days, daysShuffle });
    }
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({ hours, hoursShuffle });
    }
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({ minutes, minutesShuffle });
    }
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({ seconds, secondsShuffle });
    }
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds,
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state;

    return (
      <div className="flex flex-row justify-center gap-4">

        <div className="text-center font-bold p-4">
          <div className="mb-2">Days</div>
          <FlipUnitContainer unit="days" digit={days} shuffle={daysShuffle} />
        </div>
        <div className="text-center font-bold p-4">
          <div className="mb-2">Hours</div>
          <FlipUnitContainer unit="hours" digit={hours} shuffle={hoursShuffle} />
        </div>
        <div className="text-center font-bold p-4">
          <div className="mb-2">Minutes</div>
          <FlipUnitContainer unit="minutes" digit={minutes} shuffle={minutesShuffle} />
        </div>
        <div className="text-center font-bold p-4">
          <div className="mb-2">Seconds</div>
          <FlipUnitContainer unit="seconds" digit={seconds} shuffle={secondsShuffle} />
        </div>

      </div>
    );
  }

};

export default FlipClock;

