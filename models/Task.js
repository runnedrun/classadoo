module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {    
        name: {
            type: DataTypes.STRING,
            validate: { notEmpty: true }
        },
        description: DataTypes.TEXT,        
    }, {
        classMethods: {
            associate: function(models) {
                Task.belongsToMany(models.Lesson, { through: "LessonComponent" })
                Task.belongsToMany(models.PageConfiguration, { through: "TaskPrerequisites" });
            }
        }
    })

    return Task
}