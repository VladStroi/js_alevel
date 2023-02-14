function isBeginOfMonth() {
    const date = new Date();
    return date.getDate() == 1;
  }
  module.exports = {isBeginOfMonth}
  