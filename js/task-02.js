const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

ingredients.forEach(ingredient => {
    const creatLi = document.createElement('li')

    creatLi.insertAdjacentHTML("afterbegin", ingredient)
    document.querySelector('#ingredients').appendChild(creatLi)
});