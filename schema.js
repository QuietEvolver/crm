import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        stores: [Store]!
    }

    type Store {
        store: String
    }

    type Query {
        product: String
    }

    type StoreInput {
        store: String
    }

    type ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`)

export default schema;
