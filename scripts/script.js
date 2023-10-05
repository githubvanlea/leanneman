// JavaScript Document
console.log("hi");

/* menu openen */
var deOpenButton = document.querySelector("header > button"); 
var hetMenu = document.querySelector("header nav");

deOpenButton.onclick = openNav;

function openNav() {
    hetMenu.classList.add("open");
  }

/* menu sluiten */
var deSluitButton = document.querySelector("nav button");

deSluitButton.onclick = sluitMenu;

function sluitMenu() {
  hetMenu.classList.remove("open");
}