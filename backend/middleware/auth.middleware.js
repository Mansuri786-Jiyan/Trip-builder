import jwt from 'jsonwebtoken';
import User from '../model/userModel.js';
export const verifyToken = (req, res, next) => {
  try {
   
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = { id: decoded.id, email: decoded.email }; // add fields you signed
    next();
  } catch (err) {
    console.error('verifyToken error:', err);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};




export const verifyAdmin = async (req, res, next) => {
  try {
    const userId = req.user.id; 

    const user = await User.findById(userId).select("role");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    next(); 
  } catch (error) {
    console.error("verifyAdmin error:", error);
    res.status(500).json({ message: error.message });
  }
};
