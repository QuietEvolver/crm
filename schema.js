import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID!
        name: String
        description: String
        price: Float
        soldout: Boolean
    }

    type Query {
        hello: String!
    }
`)

export default schema;