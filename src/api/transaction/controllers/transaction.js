'use strict';

module.exports = {
    async findAll(ctx, next) {
      try {
        const data = await strapi.service('api::transaction.transaction').transactionReport();
        ctx.body = data;
      } catch (err) {
        ctx.badRequest('Transaction report controller error', { moreDetails: err })
      }
    },
    async create(ctx, next) {
        try {
        //  const wallet = await strapi.service('api::wallet.wallet').createTransaction(ctx.request.body);
          const data = await strapi.service('api::transaction.transaction').createTransaction(ctx.request.body);
          ctx.body = data;
        } catch (err) {
          ctx.badRequest('Transaction creation controller error', { moreDetails: err })
        }
      }
  };
