// console.log(`В списке ${document.getElementsByTagName("h2").length} категории`);

const categories = document.querySelector('ul');

const categoriesLength = categories.children.length;
console.log(`В списке ${categoriesLength} категории`);

console.log();

const categoryArticles = categories.querySelectorAll(".item").forEach(category => console.log(`Categories: ${category.children[0].innerText}, Number: ${category.children[1].children.length}`));

console.log();