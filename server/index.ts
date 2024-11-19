import express from "express";
import { registerRoutes } from "./routes";
import path from "path";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for development
app.use(cors());
app.use(express.json());

// API Routes
registerRoutes(app);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
