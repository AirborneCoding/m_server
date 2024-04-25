module.exports = ({ env }) => ({

    //* cloudinary
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                uploadStream: {
                    folder: env("CLOUDINARY_FOLDER", ""),
                },
                delete: {},
            },
        },
    },

    //* fuzzy search
    "fuzzy-search": {
        enabled: true,
        config: {
            contentTypes: [
                {
                    uid: "api::article.article",
                    modelName: "articles",
                    transliterate: true,
                    fuzzysortOptions: {
                        characterLimit: 500,
                        threshold: -1000,
                        // limit: 10,
                        keys: [
                            {
                                name: "title",
                                weight: 100,
                            },
                            {
                                name: "content",
                                weight: 100,
                            },
                        ],
                    },
                },
                {
                    uid: "api::version.version",
                    modelName: "versions",
                    fuzzysortOptions: {
                        characterLimit: 500,
                        threshold: -1000,
                        keys: [
                            {
                                name: "title",
                                weight: 100,
                            },
                            {
                                name: "description",
                                weight: 100,
                            },
                            {
                                name: "category_name",
                                weight: 50,
                            },
                        ],
                    },
                },
            ],
        },
    },

});
