let result = document.getElementById("result");
let results = "";
result.value = results;

let main = document.getElementById("mainDiv");
main.addEventListener("click", function (e) {
    if (e.target.className == "btn") {
        if (e.target.innerHTML == "AC") {
            result.value = "";
            return;
        }
        if (e.target.innerHTML == "C") {
            result.value = result.value.slice(0, -1);
            return;
        }
        if (e.target.innerHTML == "=") {
            result.value
        }
        let data = e.target.innerHTML;
        result.value += data;
    }

})