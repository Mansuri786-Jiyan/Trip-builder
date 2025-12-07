import User from "../model/userModel.js";

export const getuser = async (req, res) => {
  try {
    
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");
    

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.error("getuser error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
