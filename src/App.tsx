import React, { Suspense, useState } from 'react';
import handIcon from '../src/assets/images/waving_hand.png';
import css from './App.module.css';

const LazyHeader = React.lazy(() => import('./components/Header/Header'));
const LazyFlyingIcons = React.lazy(() => import('./components/FlyingIcons/FlyingIcons'));
const LazyVideo = React.lazy(() => import('./components/BGVideo/BGVideo'));
const LazyAbout = React.lazy(() => import('./components/About/About'));
const LazyProjects = React.lazy(() => import('./components/Projects/Projects'));
const LazyContacts = React.lazy(() => import('./components/ContactsSection/ContactsSection'));


function App() {
  const [lang, setLang] = useState<'ru' | 'eng'>('eng');

  
  return (
    <div style={{ overflowX: 'hidden' }}>
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
        <div id={css.homeWrap}>
          {lang === 'ru' ? (
            <>
              <div id={css.hiTextWr}>
                <span>Приветстивую!</span>
                <img id={css.hand} src={handIcon} alt="hello" />
              </div>
              <h2>Меня зовут <b>Дмитрий Бурлыко</b></h2>
              <p>&nbsp;&nbsp;Я <b>Фронт-енд разработчик</b> и здесь Вы можете найти некоторую информацию обо мне.</p>
              <p>Добро пожаловать!</p>
            </>
          ) : (
            <>
              <div id={css.hiTextWr}>
                <span>Hi there!</span>
                <img id={css.hand} src={handIcon} alt="hello" />
              </div>
              <h2>My name is <b>Dmitry Burlyko</b></h2>
              <p>&nbsp;&nbsp;I'm a <b>Front-End web developer</b> and here you can find some information about me.</p>
              <p>You're welcome!</p>
            </>
          )}
        </div >
      </section >

      <Suspense fallback={null}>
        <LazyAbout lang={lang} />
      </Suspense>

      <Suspense fallback={null}>
        <LazyProjects lang={lang} />
      </Suspense>

      <Suspense fallback={null}>
        <LazyContacts lang={lang} />
      </Suspense>
    </div>
  );
}

export default App;