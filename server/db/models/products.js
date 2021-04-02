'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    
    static associate(models) {
      
      Products.belongsToMany(models.Orders, {
        through: 'ProductsOrders',
        as: 'orders',
        foreignKey: 'ProductId',
        otherKey: 'OrderId'
      });
    }
  };
        
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    flavor: DataTypes.STRING,
    type: DataTypes.STRING,
    subType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  
  return Products;

};