let dataList = JSON.parse(localStorage.getItem("data")) || [];

// Load data on page load
window.onload = displayData;

// CREATE
function addData() {
    let input = document.getElementById("inputData");
    let value = input.value;

    if (value === "") {
        alert("Enter something!");
        return;
    }

    dataList.push(value);
    localStorage.setItem("data", JSON.stringify(dataList));

    input.value = "";
    displayData();
}

// READ
function displayData() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    dataList.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item}
            <span>
                <span class="edit" onclick="editData(${index})">✏️</span>
                <span class="delete" onclick="deleteData(${index})">❌</span>
            </span>
        `;

        list.appendChild(li);
    });
}

// UPDATE
function editData(index) {
    let newValue = prompt("Edit your data:", dataList[index]);

    if (newValue !== null && newValue !== "") {
        dataList[index] = newValue;
        localStorage.setItem("data", JSON.stringify(dataList));
        displayData();
    }
}

// DELETE
function deleteData(index) {
    dataList.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(dataList));
    displayData();
}