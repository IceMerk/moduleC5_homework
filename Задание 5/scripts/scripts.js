//Ищем поля, кнопку и див куда вставим фото
const firstIn = document.querySelector('.first-in') //Поле ввода 1
const secondIn = document.querySelector('.second-in') //Поле ввода 2
const buttonIn = document.querySelector('.button') //Кнопка
const cardsIn = document.querySelector('.cards') //Див для вставки фото

//Функция проверки числа
function check() {
    const rangeError = 'Номер страницы и лимит вне диапазона от 1 до 10'

    //Проверка на число
    if (!Number(firstIn.value) && !Number(secondIn.value)) {
        console.log(rangeError)
    }

    else {
        //Присваиваем значения чисел переменным
        const firstInNum = Number(firstIn.value)
        const secondInNum = Number(secondIn.value)

        //Если число в первом input не попадает в диапазон от 1 до 10
        if (firstInNum < 1 || 10 < firstInNum) {
            console.log('Номер страницы вне диапазона от 1 до 10')
        }

        //Если число во втором input не попадает в диапазон от 1 до 10
        else if (secondInNum < 1 || 10 < secondInNum) {
            console.log('Лимит вне диапазона от 1 до 10')
        }

        //Проверка на диапозон
        else {
            const URL = `https://picsum.photos/v2/list?page=${firstInNum}&limit=${secondInNum}`
            getFoto(URL) // Запрашиваем фото через функцию
        }

    }
}

//Функция запроса фото
function getFoto(URL) {
    return fetch(URL)
        .then((response) => { return response.json() })
        .then((json) => { makeCard(json) }) //Передаем json response
        .catch((error) => { console.log(error) })
}


//Функция вставки фото
function makeCard(arr) {
    cardsList = ''

    //Записываем json в память пользователя
    localStorage.setItem('fotoJson', JSON.stringify(arr))

    //В цикле перебираем массив и создаем карточки
    arr.forEach(function (element, id) {
        const card = `
        <div class='card'>
		<img src='${element.download_url}' class='card-img'>
        <p>${id + 1}. ${element.author}</p>
		</div>`

        cardsList += card
    });


    //Вставляем в блок фото
    cardsIn.innerHTML = cardsList
}

//Проверка на json в памяти пользователя
if (localStorage.getItem('fotoJson') != null) {
    makeCard(JSON.parse(localStorage.getItem('fotoJson')))
}


buttonIn.addEventListener("click", check)