  //CHECK AT THE BEGINNING OF THE MONTH
function isBeginOfMonth(date) {
    return date.getDate() == 1;
  };

  //RETURN THE LAST DAY OF THE MONTH
function lastDayOfMonth(date) {
    date.setMonth(date.getMonth() + 1 , 0)
    return date.getDate()
  };
  
  module.exports = {
    isBeginOfMonth,
    lastDayOfMonth
  }
  