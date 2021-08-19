const div = document.createElement('div')
div.classList.add('wrapper')

const body = document.body
body.appendChild(div)

const header = document.createElement('h1')
header.textContent = 'Рекомендации'

div.insertAdjacentElement('beforebegin', header)


const generateAutoCard = (title, chapters, year, rating) => {
    // const curDate = new Date();
    // const curYear = curDate.getFullYear();
    return `
    <div class="novelsCard">
    <h2>${title.toUpperCase()}</h2>
    <p>Дата выпуска: ${year}</p>
    <p>Количество глав: ${chapters} </p>
    <p>Рейтинг:  ${rating}</p>
    <button type='button' class='btn'>Удалить</button>
    </div>
    `;
}

const novelsDiv = document.createElement('div');
novelsDiv.classList.add('books');

const novelsList = [
    {title: 'Тень Императрицы', year: 2020, chapters: 60, rating: 4.84},
    {title: 'Недосягаемая леди', year: 2021, chapters: 26, rating: 4.96},
    {title:'Поднятие уровня в одиночку', year: 2018, chapters: 163 , rating: 4.9},
    {title: 'Ветролом', year: 2013, chapters:373 , rating: 4.94},
    {title: 'Закон бессонницы', year: 2019, chapters: 107, rating: 4.9},
    {title: 'Берегись этой чертовки!', year: 2020, chapters: 67 , rating: 4.83},
    {title: 'На пути к счастью', year: 2016, chapters: 46, rating: 4.77},
    {title: 'Волейбол', year: 2012, chapters: 405, rating: 4.94},
    {title: 'Адонис', year: 2016, chapters: 104, rating: 4.65},
    {title: 'Леди-малышка', year: 2019, chapters: 129, rating: 4.78},
    {title: 'Королева со скальпелем', year: 2017, chapters: 144, rating: 4.72},
    {title: 'Беатрис', year: 2019, chapters: 46, rating: 4.76},
    
]

    const novelsHTML = novelsList.map(novel => {
    return generateAutoCard(novel.title, novel.chapters, novel.year, novel.rating);
  }).join('');

novelsDiv.innerHTML = novelsHTML;
div.insertAdjacentElement('beforebegin', novelsDiv);


const buttons = document.querySelectorAll('.btn');
function handleClick(e) {
  const currentButton = e.currentTarget;
  currentButton.closest('.novelsCard').remove();
}

buttons.forEach(button => {
  console.log(button)
  button.addEventListener('click', handleClick)
  })