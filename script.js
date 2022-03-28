let form = document.querySelector(".form");
let table = document.querySelector(".table");
let ismi = document.querySelector(".name");
let familiya = document.querySelector(".surName");
let raqam = document.querySelector(".phonNumber");
let yoshi = document.querySelector(".age");
let submit = document.querySelector(".button");
let oquvchilar = [];

function printObj(obj, count) {
  if (count == 1) {
    document.getElementById("table").style.margin = "50px auto";
    let newRowHead = document.createElement("tr");
    newRowHead.className = "thead";
    let newColumnName = document.createElement("td");
    let newColumnSurName = document.createElement("td");
    let newColumnPhonNum = document.createElement("td");
    let newColumnAge = document.createElement("td");
    newColumnName.textContent = "Ism";
    newColumnSurName.textContent = "Familiya";
    newColumnPhonNum.textContent = "Telefon raqami";
    newColumnAge.textContent = "Yoshi";

    table.appendChild(newRowHead);
    newRowHead.appendChild(newColumnName);
    newRowHead.appendChild(newColumnSurName);
    newRowHead.appendChild(newColumnPhonNum);
    newRowHead.appendChild(newColumnAge);
  }
  let newRow = document.createElement("tr");
  let newColumnName = document.createElement("td");
  let newColumnSurName = document.createElement("td");
  let newColumnPhonNum = document.createElement("td");
  let newColumnAge = document.createElement("td");
  newColumnName.textContent = obj.ism;
  newColumnSurName.textContent = obj.fam;
  newColumnPhonNum.textContent = obj.raq;
  newColumnAge.textContent = obj.age;

  table.appendChild(newRow);
  newRow.appendChild(newColumnName);
  newRow.appendChild(newColumnSurName);
  newRow.appendChild(newColumnPhonNum);
  newRow.appendChild(newColumnAge);

  ismi.value = null;
  familiya.value = null;
  raqam.value = null;
  yoshi.value = null;
}

let count = 1;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    ismi.value == "" ||
    familiya.value == "" ||
    raqam.value == "" ||
    yoshi.value == ""
  )
    alert("Formani to`liq to`ldiring");
  else {
    printObj(
      {
        ism: ismi.value,
        fam: familiya.value,
        raq: raqam.value,
        age: yoshi.value,
      },
      count
    );
    ++count;
    oquvchilar.push({
      ism: ismi.value,
      fam: familiya.value,
      raq: raqam.value,
      age: yoshi.value,
    });
    alert("Tabriklayman siz ma`lumotlarni muvaffaqiyatli qo`shdingiz!");
  }
});
