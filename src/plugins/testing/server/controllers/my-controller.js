'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('testing')
      .service('myService')
      .getWelcomeMessage();
  },
});
