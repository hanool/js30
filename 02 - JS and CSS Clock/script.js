const setDate = () => {
  const now = new Date();

  const hour = now.getHours();
  const hourHand = document.querySelector(`.hour-hand`);
  hourHand.style.transform = `rotate(${getHourDegree(hour)}deg)`;

  const min = now.getMinutes();
  const minHand = document.querySelector(`.min-hand`);
  minHand.style.transform = `rotate(${getClockDegree(min)}deg)`;

  const sec = now.getSeconds();
  const secondHand = document.querySelector(`.second-hand`);
  secondHand.style.transform = `rotate(${getClockDegree(sec)}deg)`;
};

setInterval(setDate, 1000);

/**
 * Calculate Clock rotation degree by time.
 * @param {Number} time specific time of hour/min/sec
 *   ex) 12 o'clock => 12
 *       43 min => 43
 * @returns horizontal line based degree.
 *   ex) 12 -> 90
 */
const getClockDegree = (time) => {
  return (time * 6 + 90) % 360;
};

const getHourDegree = (hour) => {
  return (hour * 30 + 90) % 360;
};
