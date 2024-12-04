'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({strapi}) => ({
    async findBySlug(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db.query('api::product.product').findOne({
            where: { slug },
            populate: true
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        
        return this.transformResponse(sanitizedEntity);
    },
    async find(ctx) {
        const categoryFilters = {
            $and: [

            ]
        }
        
        const query = await this.sanitizeQuery(ctx)
        
        if (query.category) {
            Object.keys(query.category).map(item => {
                categoryFilters['$and'].push({
                    categories: {
                        slug: {
                            $in: query.category[item].split(',')
                        }
                    }
                })
            })
        }
        if (query?.options?.search) {
            categoryFilters['$and'].push({
                title: {
                    $containsi: query.options['search']
                }
            })
        }
        if (query['new-arrival']) {
            categoryFilters.newArrival = query['new-arrival']
        }
        const sort = query?.options?.sort ? {price: query.options.sort} : {publishedAt: 'desc'}

        const entries = await strapi.entityService.findPage('api::product.product', {
            publicationState: "live",
            fields: ['title', 'price', 'sizes', 'slug'],
            populate: {
                categories: true,
                images: true
            },
            sort,
            filters: categoryFilters,
            page: query.pagination.page,
            pageSize: query.pagination.pageSize
        })

        return {entries}
    }
}));
