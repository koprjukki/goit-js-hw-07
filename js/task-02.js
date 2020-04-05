const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];



ingredients.map(ingredient => {
    const creatLi = document.createElement('li')
    creatLi.insertAdjacentHTML("afterbegin", ingredient)
    document.querySelector('#ingredients').appendChild(creatLi)
});