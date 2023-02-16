  //CHECK AT THE BEGINNING OF THE MONTH
function isBeginOfMonth(date) {
    return date.getDate() == 1;
  };

  //RETURN THE LAST DAY OF THE MONTH
function lastDayOfMonth(date) {
  const lastDay = new Date(date)
  lastDay.setMonth(lastDay.getMonth() + 1 , 0)
    return lastDay.getDate()
  };
  
  module.exports = {
    isBeginOfMonth,
    lastDayOfMonth
  }
  