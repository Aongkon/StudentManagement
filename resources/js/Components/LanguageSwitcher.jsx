import react from "react";
import { useTranslation } from "react-i18next";
import { router } from "@inertiajs/react";
const languages = [
    { code: 'en', label: 'English' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'fa', label: 'فارسی' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'ps', label: 'پښتو' },
]

export default function LanguageSwitcher(){
    const {i18n, t} = useTranslation();
    const changeLanguage = (e) => {
        const selectedLang = e.target.value;
        i18n.changeLanguage(selectedLang);
        localStorage.setItem('lang', selectedLang);
    }
    return(
        <div>
            <label htmlFor="">{t('language')}</label>
            <select onChange={changeLanguage} value={i18n.language}>
                {languages.map((lang)=>
                
                <option key={lang.code} value={lang.code}>{lang.label}</option>

                )}
            </select>
        </div>
    )
}