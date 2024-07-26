import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../models/userModel';

export async function registerUser(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { id, first_name, last_name, language_code } = request.body as {
      id: number;
      first_name: string;
      last_name: string | null;
      language_code: string;
    };

    const existingUser = await User.findOne({ $or: [{ id }] });
    if (existingUser) {
      return reply
        .code(201)
        .send({ message: 'User Found', User: existingUser });
    }

    const newUser = new User({
      id,
      first_name,
      last_name,
      language_code,
    });

    await newUser.save();

    return reply
      .code(201)
      .send({ message: 'User registered successfully', User: newUser });
  } catch (error) {
    reply.code(500).send({ message: 'Error registering user', error });
  }
}
