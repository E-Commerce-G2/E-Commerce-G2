'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      this.hasMany(Post,{foreignKey:'useId'})
    }
    toJSON(){
      return {...this.get(),id:undefined,userId:undefined}
    }
  }
  user.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID4,  

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: { msg: 'User must have a name' },
      notEmpty: { msg: 'Name must not be empty' }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: { msg: 'User must have a name' },
      notEmpty: { msg: 'Name must not be empty' },
      isEmail:{msg:'Must be a valid email adress'}
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: { msg: 'User must have a name' },
      notEmpty: { msg: 'Name must not be empty' },
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'user',
  });
  return user;
};