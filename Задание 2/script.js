//Вам дана заготовка и результат, который вы должны получить. 
//Ваша задача — написать код, который будет преобразовывать JSON в JS-объект 
//и выводить его в консоль.

jsonData = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`

list = JSON.parse(jsonData).list
data = { list: [] }

list.forEach(item => {
    temp = {
        name: item.name,
        age: Number(item.age),
        prof: item.prof
    }

    data.list.push(temp)
})

console.log(JSON.stringify(data, null, '\t'))