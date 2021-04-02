'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Orders', [{
      
      clienteName: 'Camila',
      userId: 1,
      table: 3,
      status: 'finalizado',
      createdAt: new Date(),
      updatedAt: new Date ()
       
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('Orders', null, {});
     
  }
};
