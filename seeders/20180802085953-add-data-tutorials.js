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
    return queryInterface.bulkInsert('Tutorials', [
      {
        tutorial_name: 'Bootstrap part 1: Layout',
        description: `Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).
        While containers can be nested, most layouts do not require a nested container.`,
        CourseId: 1,
        nilai_tutorial: 10
      },
      {
        tutorial_name: 'Bootstrap part 2: Grid',
        description: `Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, Sass variables and mixins, and dozens of predefined classes.
        How it works
        Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.
        
        New to or unfamiliar with flexbox? Read this CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets. The above example creates three equal-width columns on small, medium, large, and extra large devices using our predefined grid classes. Those columns are centered in the page with the parent .container.

        Breaking it down, here’s how it works:
        
        Containers provide a means to center and horizontally pad your site’s contents. Use .container for a responsive pixel width or .container-fluid for width: 100% across all viewport and device sizes.
        Rows are wrappers for columns. Each column has horizontal padding (called a gutter) for controlling the space between them. This padding is then counteracted on the rows with negative margins. This way, all the content in your columns is visually aligned down the left side.
        In a grid layout, content must be placed within columns and only columns may be immediate children of rows.
        Thanks to flexbox, grid columns without a specified width will automatically layout as equal width columns. For example, four instances of .col-sm will each automatically be 25% wide from the small breakpoint and up. See the auto-layout columns section for more examples.
        Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So, if you want three equal-width columns across, you can use .col-4.
        Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.
        Columns have horizontal padding to create the gutters between individual columns, however, you can remove the margin from rows and padding from columns with .no-gutters on the .row.
        To make the grid responsive, there are five grid breakpoints, one for each responsive breakpoint: all breakpoints (extra small), small, medium, large, and extra large.
        Grid breakpoints are based on minimum width media queries, meaning they apply to that one breakpoint and all those above it (e.g., .col-sm-4 applies to small, medium, large, and extra large devices, but not the first xs breakpoint).
        You can use predefined grid classes (like .col-4) or Sass mixins for more semantic markup.
        Be aware of the limitations and bugs around flexbox, like the inability to use some HTML elements as flex containers.
        `,
        CourseId: 1,
        nilai_tutorial: 10,
      }, 
      {
        tutorial_name: 'Bootstrap part 2: Media Object',
        description: `
        Example
        The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.
        
        Below is an example of a single media object. Only two classes are required—the wrapping .media and the .media-body around your content. Optional padding and margin can be controlled through spacing utilities.`,
        CourseId: 1,
        nilai_tutorial: 10
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
    return queryInterface.bulkDelete('Tutorials', null, {})
  }
};
