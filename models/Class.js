module.exports = function(sequelize, DataTypes) {
    var Class = sequelize.define('Class', {    
        name: DataTypes.STRING,        
        currentLesson: DataTypes.STRING
    })

    return Class
}