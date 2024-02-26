import React, { useState } from 'react';
import AOS from 'aos';
import css from './App.module.css';

const LazyHeader = React.lazy(() => import('./components/Header/Header'));

function App() {
  const [lang, setLang] = useState<'ru' | 'eng'>('eng');


  AOS.init({
    duration: 1200,
  })


  return (
    <div className={css.container}>
      <LazyHeader lang={lang} setLang={setLang} />

      {/* <div className={css.item}
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
      >
      </div> */}

    </div>
  );
}

export default App;