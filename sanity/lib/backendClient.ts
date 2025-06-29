import { apiVersion, projectId, dataset } from "../env";
export const backendClient = {
  projectId,
  dataset,
  apiVersion, // Use a specific API version
  useCdn: true, // `false` if you want to ensure fresh data
  token: process.env.SANITY_API_TOKEN, // Optional, required for write operations
};
