'use strict';

module.exports = {
    routes: [
      {
       method: 'GET',
       path: '/transactions',
       handler: 'transaction.findAll',
       config: {
         policies: [],
         middlewares: [],
       },
      },
      {
        method: 'POST',
        path: '/transactions',
        handler: 'transaction.create',
        config: {
          policies: [],
          middlewares: [],
        },
       }
    ],
  };
