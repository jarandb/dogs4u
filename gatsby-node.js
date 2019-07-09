/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

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
