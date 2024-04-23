'use strict'
const stripe = require('stripe')(process.env.SECRET_KEY)

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::order.order", 
({ strapi }) => ({
  async create(ctx) {
    try {
      const { cartId, userId, products } = ctx.request.body
      const cartItems = await strapi.entityService.findMany("api::cart-item.cart-item", {
        populate: {
          cart: true
        },
        filters: {
          cart: {
            id: {
              $eq: cartId
            },
          },
        },
      })

      const lineItems = cartItems.map(item => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: 1
        };
      })

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + `/payment/success?session_id={CHECKOUT_SESSION_ID}&cart_id=${cartId}`,
        cancel_url: process.env.CLIENT_URL + `/payment/failed?session_id={CHECKOUT_SESSION_ID}`,
        line_items: lineItems
      });

      await strapi
        .service("api::order.order")
        .create({ data: {  cartId, sessionId: session.id, status: "pending", user: userId, products } });

      return { stripeSession: session }
    } catch (error) {
      ctx.response.status = 500;
      return { error }
    }
  },
}))