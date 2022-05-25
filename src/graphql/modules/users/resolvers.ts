import { User } from '../../../models/User';

export const resolvers = {
  User: {
    fullName: user => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { data }) => await User.create(data),
    updateUser: async (_, { id, data }) => await User.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => Boolean(await User.findByIdAndDelete(id)),
  },
};
