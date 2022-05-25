import { User } from '../../../models/User';
import { USER_ADDED } from './channels';

export const resolvers = {
  User: {
    fullName: user => `${user.firstName} ${user.lastName}`,
  },
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_, { data }, { pubSub }) => {
      const user = await User.create(data);
      pubSub.publish(USER_ADDED, { userAdded: user });

      return user;
    },
    updateUser: async (_, { id, data }) => await User.findByIdAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => Boolean(await User.findByIdAndDelete(id)),
  },
  Subscription: {
    userAdded: {
      subscribe: async (obj, args, { pubSub }) => await pubSub.asyncIterator(USER_ADDED),
    },
  },
};
