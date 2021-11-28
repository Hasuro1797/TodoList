const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const addUser = require("./src/utils/addUser");

conn
	.sync({ force: false })
	.then(() => {
		server.listen(3001, () => {
			console.log("%s listening at 3001");
		});
	})
	.then(() => addUser())
	.catch((error) => console.error("Error in dataBase:", error));
