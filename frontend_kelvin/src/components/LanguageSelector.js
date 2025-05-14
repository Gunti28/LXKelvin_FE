import React from 'react';
import i18n from '../i18n';

const LanguageSelector = () => {
    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className="mb-3">
            <select className="form-select w-auto" onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="te">తెలుగు</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
