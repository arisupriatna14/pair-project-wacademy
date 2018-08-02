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