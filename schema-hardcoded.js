const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// Harcoded Database
const customers = [
  {id: '1', name: 'Harsh Girdhar', email: 'harsh@gmail.com', age: 26},
  {id: '2', name: 'Rahul Chona', email: 'rahul@gmail.com', age: 27},
  {id: '3', name: 'Neha Girdhar', email: 'neha@gmail.com', age: 30}
]

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type:GraphQLString},
    name: {type:GraphQLString},
    email: {type:GraphQLString},
    age: {type:GraphQLInt}
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: {type: GraphQLString}
      },
      resolve(parentValue, args) {
        for(let i=0 ; i<customers.length ; i++) {
          if(customers[i].id == args.id) {
            return customers[i];
          }
        }
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args) {
        return customers;
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});
