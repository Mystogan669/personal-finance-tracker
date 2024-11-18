const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }
    // Verify the token (for example, using JWT)
    try {
      // Mock verification logic
      const verified = token === "mock-token"; // Replace with actual logic
      if (!verified) throw new Error("Invalid token");
      next();
    } catch (error) {
      res.status(400).json({ error: "Invalid token" });
    }
  };
  
  module.exports = authMiddleware;
  