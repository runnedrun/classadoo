module.exports = function(sequelize, DataTypes) {
    var Lesson = sequelize.define('Lesson', {    
        name: DataTypes.STRING,
        description: DataTypes.TEXT,        
    }, {
        classMethods: {
            associate: function(models) {
            	Lesson.belongsToMany(models.Task, { through: "LessonComponent", });
                Lesson.belongsToMany(models.WindowConfiguration, { through: "LessonComponent" });
                Lesson.hasMany(models.LessonComponent);
            }
        }
    })

    return Lesson
}