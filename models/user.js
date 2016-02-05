module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: { type: DataTypes.STRING, validate: { isEmail: true } },
        passwordHash: DataTypes.STRING,
        usertype: DataTypes.ENUM('Teacher','Student', 'Parent'),
        isAdmin: { type: DataTypes.BOOLEAN, defaulValue: false },
        name: { type: DataTypes.STRING, validate: { len: [1, 40] }}
    }, {
        classMethods: {
            associate: function(models) {}
        }
    })

    return User
}