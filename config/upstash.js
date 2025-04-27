import { Client as WorkflowClient } from '@upstash/workflow';

import { QSTASH_TOKEN, QSTASH_URL } from './env.js';

console.log('🔵 QSTASH_TOKEN:', QSTASH_TOKEN);
console.log('🔵 QSTASH_URL:', QSTASH_URL);


export const workflowClient = new WorkflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
});