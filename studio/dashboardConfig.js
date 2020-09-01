export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f4d92e649ba2f238d85745b',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-studio-xed5vtzz',
                  apiId: '88ed44c7-dcb3-4b82-a562-a903eb1edee4'
                },
                {
                  buildHookId: '5f4d92e6f0854f196472d6be',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-web-gf3mtc82',
                  apiId: '1fa9ed16-08f5-44c6-a1aa-c61c5d5272e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jseb2520/gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-portfolio-web-gf3mtc82.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
