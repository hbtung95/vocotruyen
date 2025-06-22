// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { "welcome": "Welcome", "profile": "Profile" } },
    vi: { translation: { "welcome": "Chào mừng", "profile": "Hồ sơ" } },
  },
  lng: "vi",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});
export default i18n;

// App.tsx
import './i18n';
import { useTranslation } from "react-i18next";
export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("vi")}>VI</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <h1>{t("welcome")}</h1>
    </div>
  );
}
