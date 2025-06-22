import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

// ⚡ Trigger khi người dùng được tạo qua Firebase Auth
export const onUserCreate = functions.auth.user().onCreate(async (user) => {
  const { uid, email, displayName } = user;

  // 💡 Gán role mặc định là "Athlete", hoặc phân theo email
  let role: string = "Athlete";

  if (email?.endsWith("@admin.com")) {
    role = "Admin";
  } else if (email?.endsWith("@coach.com")) {
    role = "Coach";
  } else if (email?.endsWith("@referee.com")) {
    role = "Referee";
  }

  // 🔐 Tạo document trong /users/{uid}
  await db.collection("users").doc(uid).set({
    uid,
    name: displayName || "Người dùng mới",
    email,
    role,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  console.log(`✅ Created user profile for ${email} with role ${role}`);
});
