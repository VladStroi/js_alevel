fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json();
})
.then((data) => {
    const arr = []
    data.forEach((element, i) => {
      let obj = {}
      obj.firstName = data[i].name.split(' ')[0]
      obj.lastName = data[i].name.split(' ')[1];
      arr.push(obj)
    });
    return arr
})
.then((array) => {
  console.log(array);
})
