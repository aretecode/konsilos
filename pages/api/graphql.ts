import { ApolloServer } from 'apollo-server-micro'
import {
  typeDefs,
  resolvers,
}  from '../../src/graphql'

const apolloServer = new ApolloServer({ 
  typeDefs, resolvers 
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
