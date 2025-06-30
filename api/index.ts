import { createRequestHandler } from '@react-router/serve';
import build from '../build/server/index.js'; // ou le bon chemin selon ta structure

export default createRequestHandler({ build });
