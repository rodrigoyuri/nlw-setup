import fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const app = fastify();

app.register(cors);
app.register(appRoutes);

app.listen({
    port: 3333,
    /* host: '0.0.0.0' */ // Necessário descomentar para o app mobile conseguir acessar o backend
}).then(() => {
    console.log('HTTP Server running');
});
