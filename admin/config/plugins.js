module.exports = () => ({
    "strapi-google-auth": {
        enabled: true,
    },
    redis: {
        config: {
            connections: {
                default: {
                    connection: {
                        host: '127.0.0.1',
                        port: 6379,
                        db: 0,
                    },
                    settings: {
                        debug: false,
                    },
                },
            },
        },
    },
    "rest-cache": {
        config: {
            provider: {
                name: "redis",
                options: {
                    max: 32767,
                    connection: "default",
                },
            },
            strategy: {
                
                enableEtagSupport: true,
                logs: false,
                clearRelatedCache: true,
                maxAge: 3600000,
                contentTypes: [
                    "api::faq.faq",
                    "api::brand-card.brand-card",
                    {
                        contentType: "api::brand-card.brand-card",
                        maxAge: 3600000,
                        hitpass: false,
                        keys: {
                            useQueryParams: false,
                            useHeaders: ["accept-encoding"],
                        },
                        method: "GET",
                    },
                    {
                        contentType: "api::faq.faq",
                        maxAge: 3600000,
                        hitpass: false,
                        keys: {
                            useQueryParams: false,
                            useHeaders: ["accept-encoding"],
                        },
                        method: "GET",
                    }
                ],
            },
        },
    },
});
