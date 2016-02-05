module.exports = function(sequelize, DataTypes) {
    var WindowConfiguration = sequelize.define('WindowConfiguration', {    
        name: DataTypes.STRING,
        description: DataTypes.TEXT,        
    }, {
        classMethods: {
            associate: function(models) {            	
                WindowConfiguration.belongsToMany(models.PageConfiguration, { through: "WindowPageConfigurations" });
                WindowConfiguration.belongsToMany(models.Lesson, { through: "LessonComponents" });
            }
        }
    })

    return WindowConfiguration
}