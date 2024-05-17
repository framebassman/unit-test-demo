import fetch from 'node-fetch';
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';

const projectKey = `{${process.env.CTP_PROJECT_KEY}}`;
const scopes = [`{${process.env.CTP_SCOPES}}`];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${process.env.CTP_REGION}.commercetools.com`,
  projectKey: projectKey,
  credentials: {
    clientId: `{${process.env.CTP_CLIENT_ID}}`,
    clientSecret: `{${process.env.CTP_CLIENT_SECRET}}`,
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${process.env.CTP_REGION}.commercetools.com`,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
