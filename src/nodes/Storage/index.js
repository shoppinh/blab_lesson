const req = require.context("./", true, /.show.js$/);
const modules = req.keys().map(req);
module.exports = modules;
