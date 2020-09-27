const mysql = require("mysql2");
const { prompt } = require("inquirer");
const db = require("./db");
// require("dotenv").config();
const logo = require("asciiart-logo");
const inquirer = require("inquirer");
const connection = require("./db/connection")

function start() {
    const logoText = logo({ name: "Employee Manager" }).render();
    console.log(logoText);
    mainMenu()
}

start()

function mainMenu() {
    inquirer.prompt([{
        type: "list",
        message: "What do you want to do?",
        choices: ["Add Employee", "Add Department", "Add Role", "Exit"],
        name: "todo"
    }
    ])
    .then(response =>{
        let todo = response.todo;
        if (todo === "Add Employee"){
            addEmployee()
        } else if (todo === "Add Department"){
            addDepartment()
        } else if (todo === "Add Role"){
            addRole()
        }
        else if (todo === "Exit"){
            connection.end()
        }
    })
};

function addEmployee (){
    console.log("add employee")
};
function addRole (){
    console.log("add role")
};
function addDepartment (){
    console.log("add department")
};