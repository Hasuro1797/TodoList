const { Todo } = require("../../../db.js");

const postToDo = async (req, res, next) => {
	const { title, fileId } = req.body;
	try {
		if (title) {
			const todo = await Todo.create({
				title,
			});
			await todo.setAuth(req.user);
			if (fileId) {
				await todo.setFile(fileId);
			}
			res.send({ todo });
		} else {
			res.status(422).send({ message: "The data is not enough." });
		}
	} catch (error) {
		next(error);
	}
};

module.exports = postToDo;
