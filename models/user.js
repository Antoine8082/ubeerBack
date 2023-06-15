const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    class User extends Model {
        /* async validPassword(password) {
            return await bcrypt.compare(password, this.password);
        } */
    }

    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 50],
            }
        }
    }, {
        /*      hooks: {
                 beforeCreate: async (user) => {
                     const salt = await bcrypt.genSalt(10);
                     user.password = await bcrypt.hash(user.password, salt);
                 },
                 beforeUpdate: async (user) => {
                     if (user.changed('password')) {
                         const salt = await bcrypt.genSalt(10);
                         user.password = await bcrypt.hash(user.password, salt);
                     }
                 }
             }, */
        sequelize,
        modelName: 'User'
    });

    return User;
};
