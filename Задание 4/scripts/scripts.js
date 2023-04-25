//Ищем поля, кнопку и див куда вставим фото
const firstIn = document.querySelector('.first-in') //Поле ввода 1
const secondIn = document.querySelector('.second-in') //Поле ввода 2
const buttonIn = document.querySelector('.button') //Кнопка
const cards = document.querySelector('.cards') //Див для вставки фото

//Функция проверки числа
function check() {
    const rangeError = 'одно из чисел вне диапазона от 100 до 300'

    //Проверка на число
    if (!Number(firstIn.value) && !Number(secondIn.value)) {
        console.log(rangeError)
    }

    else {
        //Присваиваем значения чисел переменным
        const firstInNum = Number(firstIn.value)
        const secondInNum = Number(secondIn.value)

        //Проверка на диапозон
        if (100 <= firstInNum && firstInNum <= 300 && 100 <= secondInNum && secondInNum <= 300) {
            const URL = `https://picsum.photos/${firstInNum}/${secondInNum}`
            getFoto(URL) // Запрашиваем фото через функцию
        }
        else { console.log(rangeError) }
    }
}

//Функция запроса фото
function getFoto(URL) {
    return fetch(URL)
        .then((response) => { makeCard(response.url) }) //Передаем ссылку на создание фото
        .catch((error) => { console.log(error) })
}


//Функция вставки фото
function makeCard(url) {
    //Блок фото с сылкой
    const card = `
        <div class='card'>
		<img src='${url}' class='card-img'>
		</div>`

    //Вставляем в блок фото
    cards.innerHTML = card
}


buttonIn.addEventListener("click", check)