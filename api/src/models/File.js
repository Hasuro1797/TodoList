const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"file",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
