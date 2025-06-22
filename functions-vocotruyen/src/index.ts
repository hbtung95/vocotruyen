import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Khởi tạo Firebase Admin SDK
admin.initializeApp();
const db = admin.firestore();

// 🔥 Trigger khi user được tạo trên Firebase Auth
export const onUserCreate = functions.auth.user().onCreate(async (user) => {
  const { uid, email, displayName } = user;

  // 🎯 Phân loại role theo email hoặc gán mặc định
  let role: string = "Athlete";

  if (email?.endsWith("@admin.com")) {
    role = "Admin";
  } else if (email?.endsWith("@coach.com")) {
    role = "Coach";
  } else if (email?.endsWith("@referee.com")) {
    role = "Referee";
  }

  // 📝 Tạo document /users/{uid}
  await db.collection("users").doc(uid).set({
    uid,
    email,
    name: displayName || "Người dùng mới",
    role,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  console.log(`✅ Tạo user profile cho ${email} với role: ${role}`);
});
