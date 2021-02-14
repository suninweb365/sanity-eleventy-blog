export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602925a725e903c603fc960f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-oon3wsny',
                  apiId: 'c13e56e3-d219-4e6c-86d5-375b971565e8'
                },
                {
                  buildHookId: '602925a78ca5c5e2785b3372',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-rir71zkv',
                  apiId: '12d98875-6f71-4396-b45e-59deffd9bb22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suninweb365/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-rir71zkv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
