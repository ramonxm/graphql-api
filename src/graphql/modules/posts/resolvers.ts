import { Post } from '../../../models/Post';

export const resolvers = {
  Query: {
    posts: async () => await Post.find(),
    post: async (_, { id }) => await Post.findById(id),
  },
  Mutation: {
    createPost: async (_, { data }) => await Post.create(data),
    updatePost: async (_, { id, data }) => await Post.findByIdAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => Boolean(await Post.findByIdAndDelete(id)),
  },
};
