module.exports = function(sequelize, DataTypes) {
    var Component = sequelize.define('LessonComponent', {            
        index: DataTypes.INTEGER,        
    }, {
        classMethods: {
            associate: function(models) {
            	Component.belongsTo(models.Lesson)                
            }
        }
    })

    return Component
}