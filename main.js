"use strict";

let books = document.querySelectorAll(".book"),
    booksList = document.querySelector(".books");

// books order
books[0].before(books[1]);
books[3].before(books[4]);
booksList.append(books[2]);

// change title fo rbook 3
books[4].getElementsByTagName("a")[0].innerText = "Книга 3. this и Прототипы Объектов";

// remove promotion 
const promotion = document.querySelector(".adv");
promotion.remove();


// chapters order

// book 2 chapters
let chapters2 = books[0].getElementsByTagName("li");

chapters2[4].before(chapters2[8]);
chapters2[3].after(chapters2[7]);
chapters2[9].after(chapters2[2]);

// book 5 chapters
let chapters5 = books[5].getElementsByTagName("li");

chapters5[1].after(chapters5[9]);
chapters5[6].after(chapters5[3]);
chapters5[8].after(chapters5[5]);

// book 6, add chapter
let chapters6 = books[2].getElementsByTagName("li");

let newTitle = document.createElement("li");
newTitle.innerText = "Глава 8: За пределами ES6";
chapters6[8].append(newTitle);