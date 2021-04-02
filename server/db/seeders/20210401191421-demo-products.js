'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products' , [{
      name: 'Café Americano',
      price: 5,
      flavor: 'null',
      type: 'Breakfast',
      subType: 'Breakfast',
      createdAt: new Date(),
      updatedAt: new Date ()
    },
    {
      name: 'Café com leite',
		  price: 7,
		  flavor: null,
		  type: 'breakfast',
      subType: 'breakfast',
      createdAt: new Date(),
      updatedAt: new Date ()
    },
    {
      name: 'Misto Quente',
		  price: 10,
		  flavor: null,
		  type: 'breakfast',
      subType: 'breakfast',
      createdAt: new Date(),
      updatedAt: new Date ()
    },
    {
      name: 'Suco Natural',
		  price: 7,
		  flavor: null,
		  type: 'breakfast',
      subType: 'breakfast',
      createdAt: new Date(),
      updatedAt: new Date ()
    },
    {
      name: 'Hambúrguer Simples',
		  price: 10,
		  flavor: 'Carne',
		  type: 'Almoço/Jantar',
      subType: 'hamburguer',
      createdAt: new Date(),
      updatedAt: new Date ()
    },
    {
      name: 'Hambúrguer Simples',
		  price: 10,
		  flavor: 'Vegetariano',
		  type: 'Almoço/Jantar',
      subType: 'hamburguer',
      createdAt: new Date(),
      updatedAt: new Date ()
    },
    {
      name: 'Hambúrguer Simples',
		  price: 10,
		  flavor: 'Frango',
		  type: 'Almoço/Jantar',
      subType: 'hamburguer',
      createdAt: new Date(),
      updatedAt: new Date ()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});   
  }
};
