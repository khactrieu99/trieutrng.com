export const ParseUTCTimeToMillis = (timeString) => {
  const unixTime = Date.parse(timeString);
  return unixTime;
}

export const GetTextApartFromNowToMillis = (millis) => {
  const currentDate = new Date();
  const consideredDate = new Date(millis);

  const diffYears = currentDate.getFullYear() - consideredDate.getFullYear();
  if (diffYears > 0) {
    return `written ${diffYears} year${diffYears>1?"s":""} ago`;
  }

  const diffMonths = currentDate.getMonth() - consideredDate.getMonth();
  if (diffMonths > 0) {
    return `written ${diffMonths} month${diffMonths>1?"s":""} ago`;
  }

  const diffDays = currentDate.getDate() - consideredDate.getDate();
  if (diffDays > 0) {
    return `written ${diffDays} day${diffDays>1?"s":""} ago`;
  }

  const diffHours = currentDate.getHours() - consideredDate.getHours();
  if (diffHours > 0) {
    return `written ${diffHours} hour${diffHours>1?"s":""} ago`;
  }

  return `has just been written`;
}