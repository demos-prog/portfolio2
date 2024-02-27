import React, { Suspense, useState } from 'react';
import handIcon from '../src/assets/images/waving_hand.png';
import AOS from 'aos';
import css from './App.module.css';

const LazyHeader = React.lazy(() => import('./components/Header/Header'));
const LazyFlyingIcons = React.lazy(() => import('./components/FlyingIcons/FlyingIcons'));
const LazyVideo = React.lazy(() => import('./components/BGVideo/BGVideo'));

function App() {
  const [lang, setLang] = useState<'ru' | 'eng'>('eng');


  AOS.init({
    duration: 1200,
  })


  return (
    <>
      {/* z-index: -100; */}
      <Suspense fallback={<div id={css.backGround} />}>
        <LazyVideo />
      </Suspense>


      {/* z-index: -50; */}
      <Suspense fallback={null}>
        <LazyFlyingIcons />
      </Suspense>

      {/* z-index: 100 */}
      <Suspense fallback={null}>
        <LazyHeader lang={lang} setLang={setLang} />
      </Suspense>


      <section id='home_section' className={css.homeSection}>
        <div id={css.hiTextWr}>
          <h2>Hi there!</h2>
          <img id={css.hand} src={handIcon} alt="hello" />
        </div>
      </section>
      <section id='about_section'>
        {/* <div className={css.item}
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
          >

          </div> */}
      </section>
      <section id='projects_section'>        </section>
      <section id='contacts_section'>        </section>
      <div className={css.space}></div>
    </>
  );
}

export default App;