module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/products/:slug',
        handler: 'api::product.product.findBySlug',
        config: {
          auth: false
        },
      },
    ]
  }