import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import flagEN from "../Assets/flagEN.png";
import flagUA from "../Assets/flagUA.png";
// import flagRU from "../Assets/flagRU.png"; // Временно отключен - резюме на русском не актуально

function LanguageStickers() {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState('en');
  
  const selectLanguage = (locale) => {
    i18n.changeLanguage(locale);
    setActiveLanguage(locale);
  };
  
  useEffect(() => {
    const currentLocale = i18n.language;
    setActiveLanguage(currentLocale);
  }, [i18n.language]);
  
  return (
    <div className="language-stickers">
      <div 
        className={`language-sticker ${activeLanguage === 'en' ? 'active' : ''}`}
        onClick={() => selectLanguage('en')}
        title="English"
      >
        <img src={flagEN} alt="EN" />
      </div>
      <div 
        className={`language-sticker ${activeLanguage === 'ua' ? 'active' : ''}`}
        onClick={() => selectLanguage('ua')}
        title="Українська"
      >
        <img src={flagUA} alt="UA" />
      </div>
      {/* Временно отключен русский язык - резюме не актуально
      <div 
        className={`language-sticker ${activeLanguage === 'ru' ? 'active' : ''}`}
        onClick={() => selectLanguage('ru')}
        title="Русский"
      >
        <img src={flagRU} alt="RU" />
      </div>
      */}
    </div>
  );
}

export default LanguageStickers; 