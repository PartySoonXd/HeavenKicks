module.exports = ({env}) => ({
    "strapi-google-auth": {
        enabled: true,
    },
    email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST', 'smtp.example.com'),
            port: env('SMTP_PORT', 587),
            auth: {
              user: env('SMTP_USERNAME'),
              pass: env('SMTP_PASSWORD'),
            },
            // ... any custom nodemailer options
          },
          settings: {
            defaultFrom: 'hello@example.com',
            defaultReplyTo: 'hello@example.com',
          },
        },
      },
    redis: {
        config: {
            connections: {
                default: {
                    connection: {
                        host: env('REDIS_HOST', '127.0.0.1'),
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
