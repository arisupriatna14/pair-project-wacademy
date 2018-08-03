// const bcrypt = require('bcrypt')
// const saltRounds = 5
// const myPlaintextPassword = 'admin12345'
// let salts = ''
// let hashs = ''

// function hashPassword(callback) {
//   bcrypt.genSalt(saltRounds, function(err, salt) {
//     if (err) {
//       throw err;
//     } else {
//       bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         if (err) {
//           throw err
//         } else {
//           callback({salt: salt, hash: hash})
//         }
//       });
//     }
    
//   });
// }

// hashPassword(data => {
//   console.log(data.salt)
//   console.log(data.hash)
// })


// <% dataTutorial.Tutorials.forEach((list, i) => { %>
//   <tr>
//     <td><%= i+1 %></td>
//     <td>
//       <% if (list.id === 1 && list.status === false) { %>
//         <button onclick="location.href='/course/<%= dataTutorial.id %>/tutorial/<%= list.id %>'" class="btn btn-success"><%= list.tutorial_name %></button><br><br>
//       <% } else { %>
//         <% if (list.id > 0 && list.status === true) { %>
//           <button onclick="location.href='/course/<%= dataTutorial.id %>/tutorial/<%= list.id %>'" class="btn btn-success"><%= list.tutorial_name %></button><br><br>
//         <% } else { %>
//           <button onclick="location.href='/course/<%= dataTutorial.id %>/tutorial/<%= list.id %>'" class="btn btn-secondary" disabled><%= list.tutorial_name %></button><br><br>
//         <% } %>
//       <% } %>
//     </td>
//     <td><%= statusCompleted(list.status) %></td>
//   </tr>
// <% }) %>
/**
 * router.get('/:courseId/tutorial/:tutorialId', authentication, (req, res) => {
  models.Tutorial.update({
    status: true
  }, {
    where: {
      id: req.params.tutorialId
    }
  })
  models
    .Tutorial
    .findOne({
      where: {
        id: req.params.tutorialId
      },
    })
    .then(detailTutorial => {
      models
        .Course
        .findById(req.params.courseId, {
          include: {
            model: models.Tutorial
          }
        })
        .then(data => {
          res.render('./user/tutorial_details', {
            username: req.session.account.username,
            image: req.session.account.image_profile,
            detailTutorial: detailTutorial,
            courseId: req.params.courseId,
            lastId: data.Tutorials.length
          })
        })
        .catch(err => {
          res.json(err)
        })
    })
    .catch(err => {
      res.json(err)
    })
})
 */

 /**
  * 
  * // if (data.status === true) {
      //   models
      //     .Course
      //     .findOne({
      //       where: {
      //         id: req.params.id
      //       },
      //       include: {
      //         model: models.Tutorial,
      //       },
      //       order: [
      //         [
      //           {model: models.Tutorial},
      //           'id',
      //           'ASC'
      //         ]
      //       ]
      //     })
      //     .then(courseById => {
      //       res.render('./user/tutorials', {
      //         username: req.session.account.username,
      //         image: req.session.account.image_profile,
      //         dataTutorial: courseById
      //       })
      //       // res.json(courseById)
      //     })
      //     .catch(err => {
      //       res.json(err)
      //     })
      // }
  */