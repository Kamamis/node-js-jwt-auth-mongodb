const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.treatment = require("./treatment.model");
db.appointment = require("./appointment.model");
db.physio = require("./physio.model");

db.ROLES = ["user", "admin", "moderator"];
db.PHYSIOS = ["Marta", "Monika", "Wojtek"];

module.exports = db;