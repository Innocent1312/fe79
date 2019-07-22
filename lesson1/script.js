var memory_price = null;
var color_price = null;
var price = null;
var memory;
var color;
var memories = [
    {
        value: 64,
        price: 500
    },
    {
        value: 128,
        price: 800
    },
    {
        value: 256,
        price: 1200
    }
];
var colors = [
    {
        value: 'red',
        price: 10
    },
    {
        value: 'silver',
        price: 15
    },
    {
        value: 'gold',
        price: 20
    }
];


while (price === null && memory !== null && color !== null) {

    color = prompt("Color?");

    if (color === null) {
        alert("Отмена!");
    }

    else

        memory = prompt("Memory?");

    for (var i = 0; i < colors.length; i++) {
        if (color === colors[i].value) {
            color_price = colors[i].price;
        }
    }

    for (var i = 0; i < memories.length; i++) {
        if (+memory === memories[i].value) {
            memory_price = memories[i].price;
        }
    }

    price = memory_price + color_price;
}

document.write('<img src = images/' + color + '.jpg> </img>');
document.write("<h1>PRICE: " + price + "$</h1>");