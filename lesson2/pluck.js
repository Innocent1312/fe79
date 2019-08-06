var characters = [{
        'name': 'barney',
        'age': 36
    },
    {
        'name': 'fred',
        'age': 40
    }
];

function getValues(arr, value) {
    var output = [];
    
    for (var i = 0; i < arr.length; ++i){
        output.push(arr[i][value]);
    }
    return output;
}

var result = getValues(characters, "age");
console.log(result)