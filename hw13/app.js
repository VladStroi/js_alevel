fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json();
})
.then((data) => {
    const arr = []
    data.map(element => {
      let obj = {}
      obj.firstName = element.name.split(' ')[0];
      obj.lastName = element.name.split(' ')[1];
      arr.push(obj)
    });
    return arr
})
.then((array) => {
  console.log(array);
})
