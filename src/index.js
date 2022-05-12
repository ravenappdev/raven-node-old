import { Client } from "./client";
import { send, sendBulk } from "./api/eventApi";

export const RavenClient = (options = {}) => {
  const apiClient = Client(options);
  return { send: send(apiClient), sendBulk: sendBulk(apiClient) };
};
