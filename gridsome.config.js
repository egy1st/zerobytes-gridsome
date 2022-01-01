// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ZeroBytes',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://zerobytes.one'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/python/', title: 'Python' },
		{ path: '/excel/', title: 'اكسيل' }
      ]
    },
    sidebar: [
      {
		  
        name: 'python',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/python/',
              '/python/print/',
              '/python/strings/',
              '/python/read-input/',
			  '/python/find-string/',
			  '/python/find-max/',
            ]
          },
          {
            title: 'Lists',
            items: [
              '/python/list-comprehensions/',
              '/python/nested-lists/',
            ]
          },
		  {
            title: 'Problems',
            items: [
              '/python/getattr-vs-eval/',
              '/python/validate-sudoku/',
			  '/python/sudoku-solver/',
            ]
          }
		  
        ]
	  },
		
	  {
		name: 'excel',
        sections: [
          {
            title: 'لماذا ميكروسوفت اكسيل',
            items: [
              '/excel/',
              '/excel/excel-01-00/',
              '/excel/excel-01-01/',
              '/excel/excel-01-02/',
			  '/excel/excel-01-03/',
			  '/excel/excel-01-04/',
			  '/excel/excel-01-05/',
			  '/excel/excel-01-06/',
			  '/excel/excel-01-07/',
		  
            ]
          },
		  
		   {
            title: 'كيف يعمل ميكروسوفت اكسيل',
            items: [
              '/excel/excel-02-01/',
			  '/excel/excel-02-02/',
			  '/excel/excel-02-03/',
			  '/excel/excel-02-04/',
			  '/excel/excel-02-05/',
			  '/excel/excel-02-06/',
		          
            ]
          },   
		
		   {
            title: 'حالة عملية: المشتريات و المبيعات',
            items: [
              '/excel/excel-03-01/',
			  '/excel/excel-03-02/',
			  '/excel/excel-03-03/',
			  '/excel/excel-03-04/',
			  '/excel/excel-03-05/',
			  '/excel/excel-03-06/',
			  '/excel/excel-03-07/',
			  '/excel/excel-03-08/',
		          
            ]
          },
		  
		  {
            title: 'حالة عملية:درجات الطلاب',
            items: [
              '/excel/excel-04-01/',
			  '/excel/excel-04-02/',
			  '/excel/excel-04-03/',
			  '/excel/excel-04-04/',
			  '/excel/excel-04-05/',
			  '/excel/excel-04-06/',
            ]
          }
		  
		  ,
		  
		  {
            title: 'محاضرات سيتم اضافتها للكورس قريباً باذن الله تعالى',
            items: [
              '/excel/excel-05-01/',
			  '/excel/excel-05-02/',
			  '/excel/excel-05-03/',
			  '/excel/excel-05-04/',
			  '/excel/excel-05-05/',
            ]
          }
		  
        ]
		
		
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs',
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'UA-188454445-2')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }
	
	
	

  ]
}
