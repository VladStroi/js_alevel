function delay(ms) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(), ms));
  }

  console.log(delay(1_000));