import { Router } from 'express';
import createUserRoutes from './routes/users.routes';

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
// Exporting routes
export default routes;
