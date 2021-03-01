module.exports = {
    siteMetadata: {
        title: `Viral Sangani`,
        author: {
            name: `Viral Sangani`,
            summary: `Your Friendly Neighborhood CSE Student`,
        },
        description: `Portfolio website of Viral Sangani`,
        siteUrl: `https://viralsangani.me`,
        social: {
            twitter: `viral_sangani_`,
        },
    },
    plugins: [
        `gatsby-plugin-preact`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-mdx`,
        {
            resolve: 'gatsby-plugin-zopfli',
            options: {
                extensions: ['css', 'html', 'js', 'svg'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/projects`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/images`,
                name: 'images',
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-166477510-1',
                head: false,
                pageTransitionDelay: 0,
                sampleRate: 5,
                siteSpeedSampleRate: 10,
            },
        },
        `gatsby-plugin-advanced-sitemap`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /static/,
                },
            },
        },
        {
            resolve: 'gatsby-source-rest-api',
            options: {
                endpoints: ['https://api.github.com/users/viral-sangani/repos'],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Viral Sangani`,
                short_name: `Viral Sangani`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: './static/logo.png',
            },
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/`],
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://viralsangani.me',
                sitemap: 'https://viralsangani.me/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
            },
        },
    ],
}
