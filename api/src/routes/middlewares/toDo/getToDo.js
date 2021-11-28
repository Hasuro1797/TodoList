const { Todo } = require("../../../db.js");

const getToDo = async (req, res, next) => {
	try {
		const toDo = await Todo.findAll({
			where: {
				authEmail: req.user,
			},
		});
		res.json({ toDo });
	} catch (error) {
		next(error);
	}
};

module.exports = getToDo;
