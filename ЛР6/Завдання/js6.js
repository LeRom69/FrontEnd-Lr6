
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
const rectangle = document.querySelector(".rectangle");

const selectedColors = new Set();

colors.forEach(color => {
    color.addEventListener("click", () => {
        if (selectedColors.has(color.style.backgroundColor)) {
            selectedColors.delete(color.style.backgroundColor);
            color.style.border = `0px solid black`;
        } else {
            selectedColors.add(color.style.backgroundColor);
            color.style.border = `2px solid black`;
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

///////////////////////////////////////4////////////////////////////////////

const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
    const editButton = block.querySelector('.edit-button');
    const deleteButton = block.querySelector('.delete-button');
    const paragraph = block.querySelector('p');
    const textarea = document.createElement('textarea');

    editButton.addEventListener('click', () => {
        block.classList.add('edit-mode');
        textarea.value = paragraph.textContent;
        block.replaceChild(textarea, paragraph);
        textarea.focus();
    });

    textarea.addEventListener('blur', () => {
        paragraph.textContent = textarea.value;
        block.classList.remove('edit-mode');
        block.replaceChild(paragraph, textarea);
    });

    deleteButton.addEventListener('click', () => {
        block.remove();
    });
});


///////////////////////////////////////5////////////////////////////////////

const colors1 = document.querySelectorAll(".color1");
const canvas1 = document.getElementById("canvas1");

let selectedColor = null;

colors1.forEach(color1 => {
    color1.addEventListener("click", () => {
        selectedColor = color1.style.backgroundColor;
    });
});

for (let i = 0; i < 100; i++) {
    const square1 = document.createElement("div");
    square1.classList.add("square1");
    square1.addEventListener("click", () => {
        if (selectedColor) {
            square1.style.backgroundColor = selectedColor;
        }
    });
    canvas1.appendChild(square1);
}

///////////////////////////////////////6////////////////////////////////////

const card = document.getElementById("card");
let isFlipped = false;

card.addEventListener("click", () => {
    if (!isFlipped) {
        card.style.transform = "rotateY(180deg)";
        isFlipped = true;

        setTimeout(() => {
            card.style.backgroundImage = `url(https://c0.klipartz.com/pngpicture/911/391/gratis-png-as-de-espadas-naipes-as-de-corazones-baraja-thumbnail.png)`;
            card.style.marginLeft = `300px`
        });

    } else {
        card.style.transform = "rotateY(0deg)";
        isFlipped = false;

        setTimeout(() => {
            card.style.marginLeft = `0px`
            card.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OFFYGJXABMego8MbLo7mb00678dqHAdot9zTYT9PSoKsZc5fwaCl8c71qaJY2T95BoE&usqp=CAU)`;

        });
    }
});

///////////////////////////////////////7////////////////////////////////////

const messageList = document.querySelector(".messageList");
const messageForm = document.querySelector(".messageForm");

messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector(".username").value;
    const messageText = document.querySelector(".messageText").value;

    if (username && messageText) {
    
        const currentDate = new Date();

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const currentMonth = months[currentDate.getMonth()];

        const currentDay = currentDate.getDate();
        const currentYear = currentDate.getFullYear();

        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();

        const currentTime = `${currentHour}:${currentMinute}`;
        const getFullDate = `${currentDay} ${currentYear}`;

        console.log(currentTime)


        const messageDiv1 = document.createElement("div");
        const messageDiv2 = document.createElement("div");
        const messageDiv3 = document.createElement("div");
        const br = document.createElement("br");

        messageDiv1.className = "message1";
        messageDiv3.className = "message2";

        messageDiv1.innerHTML = `${username}`;
        messageDiv2.innerHTML = `${currentDayOfWeek} ${currentMonth} ${getFullDate} ${currentTime}`;
        messageDiv3.innerHTML = `${messageText}`;

        messageList.appendChild(messageDiv1);
        messageDiv1.appendChild(messageDiv2);
        messageList.appendChild(messageDiv3);
        messageList.appendChild(br);

        // Очистити поля вводу
        document.querySelector(".username").value = "";
        document.querySelector(".messageText").value = "";
    }
});

///////////////////////////////////////8////////////////////////////////////

const books = document.querySelectorAll('.book');
let selectedBook = null;

books.forEach(book => {
    book.addEventListener('click', () => {
        if (selectedBook) {
            selectedBook.style.backgroundColor = '';
        }
        if (selectedBook !== book) {
            book.style.backgroundColor = 'rgb(138, 196, 52)';
            selectedBook = book;
        } 
    });
});