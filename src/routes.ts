import { Router } from 'express';
import { isAuthenticated } from './middleware/isAuthenticated';
import createUserRoutes from './routes/users.routes';
import tweetsRoutes from './routes/tweets.routes';
import retweetRoutes from './routes/retweet.routes';

const routes = Router();
// Base Routes
routes.get('/', (request, response) => {
  response.json({
    success: true,
    title: 'Nuvenz-api-BackEnd-Twitter',
    message: 'Testando na Nuvenz',
    version: '1.0.0',
  });
});

// All Routes
// UnAuth Routes
routes.use(createUserRoutes);
// Auth Routes
routes.use(isAuthenticated);
routes.use(tweetsRoutes);
routes.use(retweetRoutes);
// Exporting routes
export default routes;
