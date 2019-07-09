/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const dogTemplate = path.resolve(`src/components/layout/dogLayout.js`);

//   return graphql(
//     `
//     doggo {
//       dogs {
//         slug
//       }
//     }
//     `,
//     { limit: 1000 }
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog post pages.
//     result.data.doggo.dogs.forEach( ({slug}) => {
//       createPage({
//         path: slug,
//         component: dogTemplate,
//         context: {
//          slug
//         },
//       })
//     })
//   })
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const dogTemplate = path.resolve(`src/components/layouts/dogLayout.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `{
        doggo {
          dogs {
            slug
          }
        }
      }
        `
      ).then(result => {
        console.log(result.data);
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each markdown file.
        result.data.doggo.dogs.forEach(({ slug }) => {
          createPage({
            path: slug,
            component: dogTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              slug,
            },
          })
        })
      })
    )
  })
}

exports.createResolvers = ({createResolvers}) => {
  const resolvers = {
    DOGGO_Dog: {
      mo_products: {
        type: ['MoltinProduct'],
        resolve: (source, args, context, info) => {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                sku: {
                  in: source.products
                },
              },
            },
            type: "MoltinProduct",
            firstOnly: false
          })
        }
      }
    }
  }
  createResolvers(resolvers)
}
