const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send("Access token expired");
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');

// // โหลด environment variables จากไฟล์ .env
// dotenv.config();

// function authenticateToken(req, res, next) {
//   // ดึง Token จาก Header (Authorization: Bearer <token>)
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   // ถ้าไม่มี Token ให้ตอบกลับสถานะ 401 (Unauthorized)
//   if (!token) return res.status(401).json({ message: "No token provided" });

//   // ตรวจสอบความถูกต้องของ JWT Token
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) {
//       console.error("JWT verification error:", err.message);
//       return res.status(403).json({ message: "Invalid or expired token" });
//     }

//     // ถ้า Token ถูกต้อง เก็บข้อมูลผู้ใช้ใน req.user
//     req.user = user;
//     next(); // ไปยังขั้นตอนถัดไป
//   });
// }

// module.exports = authenticateToken;
