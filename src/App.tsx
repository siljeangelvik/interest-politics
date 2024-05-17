import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {useTranslation, Trans} from 'react-i18next';
import Home from './routes/Home';
import About from './routes/About';
import Navbar from './components/Navbar';

interface Language {
    nativeName: string;
}

interface Languages {
    [key: string]: Language;
}

const lngs: Languages = {
    en: {nativeName: 'English'},
    no: {nativeName: 'Norwegian'}
};


const App: React.FC = () => {
    const {t, i18n} = useTranslation();

    return (
        <>
            <Navbar/>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        {Object.keys(lngs).map((lng) => (
                            <button
                                key={lng}
                                style={{fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}}
                                type="submit"
                                onClick={() => i18n.changeLanguage(lng)}
                            >
                                {lngs[lng].nativeName}
                            </button>
                        ))}
                    </p>
                    <p>
                        <Trans i18nKey="description.part1">
                            Edit <code>src/App.js</code> and save to reload.
                        </Trans>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('description.part2')}
                    </a>
                </header>
            </div>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('description.part2')}
            </a>
            <div>

            </div>
        </>
    );
}

export default App;