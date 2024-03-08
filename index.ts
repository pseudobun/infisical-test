import { InfisicalClient } from "@infisical/sdk";

const client = new InfisicalClient({
  clientId: process.env.INFISICAL_CLIENT_ID,
  clientSecret: process.env.INFISICAL_SECRET,
});

const name = await client.getSecret({
  environment: "dev",
  projectId: "b8b3748e-90d2-49e5-b88e-7da806b0c8c5",
  path: "/test",
  type: "shared",
  secretName: "TEST_VALUE",
});

console.log(name.secretValue);
console.log(process.env.TEST_VALUE);
