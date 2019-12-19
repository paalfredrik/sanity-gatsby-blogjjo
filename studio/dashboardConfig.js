export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5dfb779e20625e6b683a7f13',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogjjo-studio',
                  apiId: '15e2e797-6be9-498e-b33a-b63677d61328'
                },
                {
                  buildHookId: '5dfb779e11853be2d446c844',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogjjo',
                  apiId: '740066e5-53e9-4843-a5f2-6abddf7e4ef4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-gatsby-blogjjo',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogjjo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
