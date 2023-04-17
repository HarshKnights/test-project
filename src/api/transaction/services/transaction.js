"use strict";

module.exports = {
   transactionReport: async () => {
    try {
      // fetching the data
      // we dont really need contentSections for this example.
      // its kept here, just for your reference
      const entries = await strapi.entityService.findMany("api::transaction.transaction");

      // reducing the data to a simple array
      return entries
    } catch (err) {
      return err;
    }
  },
   createTransaction: async (data) => {
    try {
      const wallet = await strapi.entityService.findOne("api::wallet.wallet",1)
      const balance = Number(wallet.balance) + Number(data.amount)
      const entries = await strapi.entityService.create("api::transaction.transaction",{
        data:{ ...data,
        balance: 0,
        publishedAt:new Date
        }
      });
      const walletUpdate = await strapi.entityService.update("api::wallet.wallet", 1 , {
        data:{ 
        balance: balance,
        publishAt:new Date,
        updatedAt: new Date()
        }
      })

      return entries
    } catch (err) {
      return err;
    }
  }
};
