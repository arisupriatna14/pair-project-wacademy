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
    return queryInterface.bulkInsert('Courses', [
      {
        title: 'Build Creative Website Using HTML5, CSS3, jQuery & Bootstrap',
        image: 'https://udemy-images.udemy.com/course/750x422/403604_668a_4.jpg',
        rating: 8,
        description: `First thing first, please View Project Demo at link given in lecture# 2 :) <br> Now, lets discuss what is inside this course. You are here because you are ready to start learning web development skills Or maybe you are already coding and want to take your web development skills to the next level. <br> In this course, first, you will learn basics of web development technologies and then you will learn to build a huge creative & modern looking professional website from the very scratch . `,
        level: 'Beginner'
      },
      {
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        image: 'https://images.techhive.com/images/article/2014/09/nodejs-1280x1024-100453402-primary.idge.jpg',
        rating: 9,
        description: `In this 8.5 hour course you will learn by example building 2 real world server-side applications from scratch all the way up to deployment with a real domain. No more confusion about how to build a Node app for production and not just on your localhost. <br> You will learn how to structure your Node/Express applications, create data models, relate data, display views, authenticate users, create helpers and much more...`,
        level: 'Beginner'
      },
      {
        title: 'Build Web Apps with Vue JS 2 & Firebase',
        image: 'https://d2jq2hx2dbkw6t.cloudfront.net/46/maxresdefault.jpg',
        rating: 9,
        description: `If you're looking to get started building full-stack applications with Vue JS and Firebase, then look no further. In this course I'll take you from novice to ninja in Vue JS, starting out with the very basics of VueJS and then moving on towards creating fully-fledged VueJS applications. <br> We'll spend a whole chapter learning about the Vue Router - and how to create SPA's (single page applications) using it - as well as exploring how to use the Vue CLI to get up and running quickly when creating Vue applications.`
        ,
        level: 'Beginner'
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
    return queryInterface.bulkDelete('Courses', null, {})
  }
};
