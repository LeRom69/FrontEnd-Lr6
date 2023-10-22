
/////////////////////////////////////1////////////////////////
let userNumber = 1;

function addUser() {
    let firstName = document.querySelector(".firstName").value;
    let lastName = document.querySelector(".lastName").value;

    if (firstName && lastName) {
        let table = document.querySelector(".userTable");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = userNumber;
        cell2.innerHTML = firstName;
        cell3.innerHTML = lastName;

        userNumber++;

        document.querySelector(".firstName").value = "";
        document.querySelector(".lastName").value = "";
    } else {
        alert("Будь ласка, заповніть всі поля форми.");
    }
}

///////////////////////////////////////2////////////////////////////////////
function generateSquares() {
    const inputText = document.querySelector('.inputTextArea').value;
    const rows = inputText.split('\n').map(row => row.trim());

    const outputContainer = document.querySelector('.outputContainer');
    outputContainer.innerHTML = '';

    for (let i = 0; i < rows.length; i++) {
        const row = document.createElement('div');

        for (let j = 0; j < rows[i].length; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            if (rows[i][j] === '0') {
                square.classList.add('white');
            } 
            if (rows[i][j] === '1') {
                square.classList.add('black');
            }
            row.appendChild(square);
        }

        outputContainer.appendChild(row);
    }
}


///////////////////////////////////////3////////////////////////////////////

const colors = document.querySelectorAll(".color");
const rectangle = document.getElementById("rectangle");

const selectedColors = new Set();

colors.forEach(color => {
    color.addEventListener("click", () => {
        if (selectedColors.has(color.style.backgroundColor)) {
            selectedColors.delete(color.style.backgroundColor);
        } else {
            selectedColors.add(color.style.backgroundColor);
        }

        if (selectedColors.size > 1) {
            const gradientColors = Array.from(selectedColors).join(",");
            rectangle.style.background = `linear-gradient(to right, ${gradientColors})`;
        } else if (selectedColors.size === 1) {
            rectangle.style.background = Array.from(selectedColors)[0];
        } else {
            rectangle.style.background = "transparent";
        }
    });
});