import { FastifyInstance } from 'fastify';
import { registerUser } from '../controllers/userController';
import { registerUserSchema } from '../schemas/userSchema';

export default function userRoutes(
  fastify: FastifyInstance,
  options: any,
  done: () => void
) {
  fastify.post(
    '/register',
    {
      schema: registerUserSchema,
      onRequest: (request, reply, done) => {
        reply.header('Access-Control-Allow-Origin', '*');
        done();
      },
    },
    registerUser
  );
  done();
}
