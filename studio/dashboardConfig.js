export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60840b3cbd1bbe3207904e75',
                  title: 'Sanity Studio',
                  name: 'arrangere-sanity-studio',
                  apiId: '8ee07b84-ae95-4a54-b40c-c234c1c29892'
                },
                {
                  buildHookId: '60840b3ccf0f8741877ad489',
                  title: 'Landing pages Website',
                  name: 'arrangere-sanity',
                  apiId: '77ff53bc-8aac-46d1-9d1c-e9a51d41085e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ekallevik/arrangere-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://arrangere-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
