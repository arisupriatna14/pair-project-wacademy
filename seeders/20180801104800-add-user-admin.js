'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        first_name: 'admin',
        last_name: 'admin',
        username: 'admin',
        email: 'admin1408@admin.com',
        image_profile: '/public/image/github-logo-octocat-1-704x605.jpg',
        password: '$2b$05$oQR5d8E6wn2UK.K4iDTeB.yKRQZNFlnzUHXZz7IH59K3mVMaF7lRK',
        role: 'admin'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
