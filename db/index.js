const connection = require("./connection");

class DB {
    constructor() {
        this.connection = connection;
    }

    showEmployees() {
        return this.connection.query
        ("SELECT employee.id")
    }
}

module.exports = new DB(connection)