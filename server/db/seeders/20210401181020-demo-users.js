'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users' , [{
      name: 'Camila',
      email: 'camila@camila.com.br',
      password: '123456',
      role: 'hall',
      restaurant: 'NaBrasa Burgers',
      createdAt: new Date(),
      updatedAt: new Date ()
      
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
    
    
