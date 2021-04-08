// С шахматами не успел разобраться, оставлю что успел написать/найти. 
var table = document.querySelector(".game");
for (var i = 1; i < 9; i++) {
    var tr = document.createElement('tr');
    for (var j = 1; j < 9; j++) {
        var td = document.createElement('td');
        if (i%2 == j%2) {
            td.style.backgroundColor = "white";
        } else {
            td.style.backgroundColor = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
