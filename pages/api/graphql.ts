import { ApolloServer } from 'apollo-server-micro'
import { typeDefs, resolvers } from '../../src/graphql'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  /**
   * @security @note this enables playground in production
   */
  playground: true,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
