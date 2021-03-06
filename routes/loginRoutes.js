const fs = require('fs');
const { getViewHTML, loginUser } = require('../controllers/loginController')

async function login(req, res) {
    switch (req.method) {
        case "GET":
            getViewHTML(req, res);
            break;
        case "POST":
            await loginUser(req, res);
            break;
        default:
            res.write('method not allowed');
    }
}

module.exports = {
    login: login
}