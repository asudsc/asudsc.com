/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const webpack = require(`webpack`);

// exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
//   console.log('==== Disabling Chunk ====');
//   if ((process.env.NODE_ENV === 'production' && stage === 'build-javascript') || options.development) {
//     actions.setWebpackConfig({
//       plugins: [
//         new webpack.optimize.LimitChunkCountPlugin({
//           maxChunks: 1
//         })
//       ]
//     });
//   }
// // }

// exports.createPages = ({ graphql, actions }) => {
//     const { createRedirect } = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
//     createRedirect({ fromPath: '/linkedin-workshop', toPath: 'https://google.com', isPermanent: true });
// }