document.getElementById("MyForm").addEventListener("submit", function (event) {
    // Default action रोकना
    event.preventDefault();

    // // अब आप खुद डेटा handle कर सकते हैं
    let name = event.target.name.value;
    let age = event.target.age.value;
    let address = event.target.address.value;
    let gender = event.target.Gender.value;

    let div = document.createElement("div");
    div.innerHTML = `name : ${name} age:${age} address: ${address} gender: ${gender}`;
    // document.body.appendChild(div);
    document.getElementById("maindiv").style.display = "none";
    document.getElementById("secondiv").style.display = "block";


});
