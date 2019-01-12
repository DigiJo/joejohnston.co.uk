module.exports = {
	siteMetadata: {
		title: 'Leading Belfast Marketing Consultant',
		author: 'Joseph Johnston',
		description: 'I am Joe — founder of Budibase and leading Belfast marketing consultant. I build beautiful websites and rank them high on Google.',
		keywords: ['website', 'consulting', 'portfolio', 'blog', 'design', 'SEO'],
		siteUrl: 'https://joejohnston.co.uk',
		email: 'hi@joejohnston1989.co.uk',
		forHire: true
	},
	pathPrefix: '/',
	plugins: [
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
				path: `${__dirname}/src/assets`,
				name: 'assets',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							backgroundColor: 'transparent',
							linkImagesToOriginal: false,
							maxWidth: 740
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					'gatsby-remark-autolink-headers',
					'gatsby-remark-external-links',
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-127022296-1`,
			},
		},
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-feed`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: '#43bf4d',
				showSpinner: false
			},
		},
		`gatsby-plugin-netlify`
	],
}
