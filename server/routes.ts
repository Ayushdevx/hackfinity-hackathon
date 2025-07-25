import type { Express } from "express";
import { createServer, type Server } from "http";
import sponsorRoutes from "./routes/sponsorRoutes";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api
  
  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.use("/api/sponsor", sponsorRoutes);

  const httpServer = createServer(app);
  return httpServer;
}
