const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"todo",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			status: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
