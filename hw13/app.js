fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const arr = [];
    data.map((element) => {

      const splited = element.name.split(" ");

      if (splited[0] == "Mrs." || splited[0] == "Mr.") {
        arr.push({ firstName: splited[1], lastName: splited[2] });
      } else {
        arr.push({ firstName: splited[0], lastName: splited[1] });
      }
      
    });
    return arr;
  })
  .then((array) => {
    console.log(array);
  });
