require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/todos`,
	{
		logging: false,
		native: false,
		define: {
			freezeTableName: true,
		},
	}
);
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "/models", file)));
	});

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Auth, File, Todo, Profile } = sequelize.models;

Auth.hasOne(Profile);
Profile.belongsTo(Auth);

Auth.hasMany(Todo);
Todo.belongsTo(Auth);

File.hasMany(Todo);
Todo.belongsTo(File);

Auth.hasMany(File);
File.belongsTo(Auth);

module.exports = {
	...sequelize.models,
	conn: sequelize,
};
