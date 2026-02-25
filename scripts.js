const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonDescount = document.querySelector('.desconto10');
const buttonSomaTotal = document.querySelector('.somarTudo');
const buttonFilter = document.querySelector('.filtrar');

function formatPrice(price) {
    const newValue = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return newValue;
}


function ShowAll(productsArray) {
    let myLi = '';
    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> ${formatPrice(product.price)}</p>
        </li>
    `
    })
    list.innerHTML = myLi;
}

function descount10() {
    const newPrice = menuOptions.map((product) => ({
        ...product,
        price: (product.price - (product.price * 0.1)),
    }
    ))
    ShowAll(newPrice)
}

function somaTotal() {
    const total = menuOptions.reduce((total, product) => total + product.price, 0)
    list.innerHTML = '<li><p>Total da Nossa Lista é:' + formatPrice(total) + '</p></li>'
}

function filterVegan() {
    const veganProducts = menuOptions.filter((product) => product.vegan)
    ShowAll(veganProducts)
}


buttonShowAll.addEventListener('click', () => ShowAll(menuOptions));
buttonDescount.addEventListener('click', descount10);
buttonSomaTotal.addEventListener('click', somaTotal);
buttonFilter.addEventListener('click', filterVegan);
