import dayjs from 'dayjs';

const getTime = (date: string) => {
  const createdAtInSecond: number = Math.abs(dayjs(date).diff(Date.now(), 'second'));
  let createdAt: string;
  console.log(createdAtInSecond);

  if (createdAtInSecond < 60) {
    createdAt = `${Math.floor(createdAtInSecond).toString()} ${
      Math.floor(createdAtInSecond) === 1 ? 'second' : 'seconds'
    }`;
  } else if (createdAtInSecond > 60 && createdAtInSecond < 3600) {
    createdAt = `${Math.floor(createdAtInSecond / 60).toString()} ${
      Math.floor(createdAtInSecond / 60) === 1 ? 'min' : 'mins'
    }`;
  } else if (createdAtInSecond > 3600 && createdAtInSecond < 3600 * 24) {
    createdAt = `${Math.floor(createdAtInSecond / 3600).toString()} ${
      Math.floor(createdAtInSecond / 3600) === 1 ? 'hour' : 'hours'
    }`;
  } else if (createdAtInSecond > 3600 * 24 && createdAtInSecond < 3600 * 24 * 30) {
    createdAt = `${Math.floor(createdAtInSecond / (3600 * 24)).toString()} ${
      Math.floor(createdAtInSecond / (3600 * 24)) === 1 ? 'day' : 'days'
    }`;
  } else if (createdAtInSecond > 3600 * 24 * 30 && createdAtInSecond < 3600 * 24 * 30 * 12) {
    createdAt = `${Math.floor(createdAtInSecond / (3600 * 24 * 30)).toString()} ${
      Math.floor(createdAtInSecond / (3600 * 24 * 30)) === 1 ? 'month' : 'months'
    }`;
  } else {
    createdAt = `${Math.floor(createdAtInSecond / (3600 * 24 * 30 * 12)).toString()} ${
      Math.floor(createdAtInSecond / (3600 * 24 * 30 * 12)) === 1 ? 'year' : 'years'
    }`;
  }
  return createdAt;
};

export default getTime;
