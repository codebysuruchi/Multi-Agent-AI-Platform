import { getAuth } from "firebase-admin/auth";
import { app } from "../config/firebase.js";

export const login = async (req, res) => {
  try {
    const { token } = req.body;
    // Process the token (e.g., verify with Firebase Admin SDK)
    const decoded =awaituth(app).verifyIdToken(token);
    const user=await user.findOne({
        firebaseUId:decoded.uid
    })

    if(!user){
        user=await user.create({
            firebaseUId:decoded.uid,
            name:decoded.name,
            email:decoded.email,
            avatar:decoded.picture
        });
    }

    const sessionId=crypto.randomUUID();

    res.cookie('session',sessionId,{
        httpOnly:true,
        secure:false,
        sameSite:'strict',
        maxAge:7*24*60*60*1000
    });

    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    return res.status(500).json({ message: `Login error: ${error}` });
  }
};
