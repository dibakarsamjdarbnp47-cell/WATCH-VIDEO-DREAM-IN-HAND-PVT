import serverless from 'serverless-http';
import { createApp } from '../../server/createApp.js';

const app = createApp();

export const handler = serverless(app);
