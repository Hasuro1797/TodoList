const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define(
		"auth",
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};
