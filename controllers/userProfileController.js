const fs = require('fs');

function getViewHTML(req, res) {
    res.write(fs.readFileSync("./views/UserProfile/userProfile.html"));
}

module.exports = {
    getViewHTML,
}