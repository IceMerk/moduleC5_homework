//Вам дана заготовка и результат, который вы должны получить. 
//Ваша задача — написать код, который будет преобразовывать XML в JS-объект 
//и выводить его в консоль.


xmlData = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`
//Создаем класс DOMParser и парсим
const xmlDom = new DOMParser().parseFromString(xmlData, 'text/xml')

//Ищем всех студентов
const studentNode = xmlDom.querySelectorAll('student')

//Создаем файл для хранения данных
let data = { list: [] }

//В цикле перебераем данные и пушим в data
studentNode.forEach((item) => {
    let list = {
        name: `${item.querySelector('first').textContent} ${item.querySelector('second').textContent}`,
        age: Number(item.querySelector('age').textContent),
        prof: item.querySelector('prof').textContent,
        lang: item.querySelector('name').getAttribute('lang')
    }

    data.list.push(list)
})

//Выводим в консоль
console.log(JSON.stringify(data, null, '\t'))