import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';

const projectKey = `{${process.env.REACT_APP_CTP_PROJECT_KEY}}`;
const scopes = [`{${process.env.REACT_APP_CTP_SCOPES}}`];

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${process.env.REACT_APP_CTP_REGION}.gcp.commercetools.com`,
  projectKey: projectKey,
  credentials: {
    clientId: `{${process.env.REACT_APP_CTP_CLIENT_ID}}`,
    clientSecret: `{${process.env.REACT_APP_CTP_CLIENT_SECRET}}`,
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${process.env.REACT_APP_CTP_REGION}.gcp.commercetools.com`,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
