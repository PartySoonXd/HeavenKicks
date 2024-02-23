'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({strapi}) => ({
    async find(ctx) {
        const filters = {}
        const {filter, sort, slug, search, page, pageSize, newArrival} = await this.sanitizeQuery(ctx); 
        if (search) {
            filters.title = {
                $containsi: search
            }
        }
        if (slug) {
            filters.slug = slug
        }
        if (newArrival) {
            filters.newArrival = {
                $eq: newArrival
            }
        }
        if (filter) {
            const filtersArray = filter.replaceAll(',', " ").split(" ")
            filters.categories = {
                name: {
                    $eq: filtersArray
                }
            }
        }
        
        const entries = await strapi.entityService.findPage('api::product.product', {
            publicationState: "live",
            fields: ['title', 'price', 'sizes', 'slug'],
            populate: {
                categories: true,
                images: true
            },
            sort,
            filters: filters,
            page: page,
            pageSize: pageSize
        })

        return {entries}
    }
}));
