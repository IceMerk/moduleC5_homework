// Ищем кнопку, поле, блок
let inputIn = document.querySelector('.input-in')
let button = document.querySelector('button')
let cardsPic = document.querySelector('.cards')


button.onclick = check

// Функция проверки числа и запуска взять фото
function check() {
    if (!Number(inputIn.value)) {
        console.log('Ошибка! Введите число')
    } else {
        let inputInNum = Number(inputIn.value) // переводим в число
        0 < inputInNum && inputInNum < 11 ? getPics(inputInNum, makeCard) : console.log('Введите число от 1 до 10')
    }
}

// Функция для запроса фото
function getPics(num, callback) {
    const xhr = new XMLHttpRequest()
    const URL = `https://picsum.photos/v2/list?limit=${num}`

    xhr.open('GET', URL, true)

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Статус ответа ${xhr.status}`)
        }
        else {
            const result = JSON.parse(xhr.response)

            if (callback) {
                callback(result)
            }
        }
    }

    xhr.onerror = () => console.log(`Ошибка загрузки ${xhr.status}`)

    xhr.send()
}
// Функция создания карточек
function makeCard(arr) {
    let cards = ''

    arr.forEach(item => {
        const cardBlock = `
		<div class='card'>
		<img src='${item.download_url}' class='card-img'>
		<p>${+item.id + 1}. ${item.author}</p>
		</div>`

        cards += cardBlock
    })

    cardsPic.innerHTML = cards
}