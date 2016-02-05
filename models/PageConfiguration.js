module.exports = function(sequelize, DataTypes) {
    var PageConfiguration = sequelize.define('PageConfiguration', {    
        name: DataTypes.STRING,
        description: DataTypes.TEXT,        
        url: {type: DataTypes.STRING, validate: {isUrl: true}}
    }, {
        classMethods: {
            associate: function(models) {
                PageConfiguration.belongsToMany(models.WindowConfiguration, { through: "WindowPageConfigurations" });
                PageConfiguration.belongsToMany(models.Task, { through: "TaskPrerequisites" });
            }
        }
    })

    return PageConfiguration
}