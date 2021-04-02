'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    
    static associate(models) {
      
    }
  };

  ProductsOrders.init({
    OrderId: DataTypes.INTEGER,
    Quantidade: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });

  return ProductsOrders;
};