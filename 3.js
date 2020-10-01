var name = ["D", "U", "M", "B", "W", "A", "Y", "S", "I", "D"];
var sem = name.length;
var output = "";
for (var i = 0; i < sem; i++) {
    output = "";
    for (var a = 0; a < sem; a++) {
        sem[a] = "=";
    }
    sem[i] = name[i];
    sem[temp - 1 - i] = name[i];
    for (var n = 0; n < sem; n++) {
        output += sem[n];
    }
    console.log(output);
}
const rizka = " Rizka";
console.log(rizka);