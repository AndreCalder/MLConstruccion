"use client";

import Image from "next/image";
import moment from "moment";
import React, { useEffect } from "react";

export default function Home() {

  var now = moment(new Date());
  var end = moment("2024-12-15");

  const [dateDiff, setDateDiff] = React.useState({days: "-", hours: "-", minutes: "-", seconds: "-"});

  useEffect(() => {
    const timer = setInterval(() => {
      let duration = moment.duration(end.diff(moment()));

      const days = Math.floor(duration.asDays()).toString();
      const hours = duration.hours().toString();
      const minutes = duration.minutes().toString();
      const seconds = duration.seconds().toString();

      setDateDiff({days, hours, minutes, seconds});
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-5">
      <nav className="nav-container">
        <div className="navbar py-2">
          <a className="navbar__logo"><img src="img/logo.png" alt="M4 Logo" /></a>
        </div>
      </nav>
      <main>
        <section className="header">
          <div className="header__flex-container">
            <div className="header__content">
              <div className="header__content__top">
                <div className="header__content__top__img">
                  <figure><img src="img/isometric.png" alt="" /></figure>
                </div>
                <div className="header__content__top__countdown-container" id="clockdiv">
                  <div className="header__content__top__countdown-container__time-container">
                    <div className="days">{dateDiff.days}</div>
                    <div className="days-label">Dias</div>
                  </div>
                  <div className="header__content__top__countdown-container__time-container">
                    <div className="hours">{dateDiff.hours}</div>
                    <div className="hours-label">Horas</div>
                  </div>
                  <div className="header__content__top__countdown-container__time-container">
                    <div className="minutes">{dateDiff.minutes}</div>
                    <div className="minutes-label">Minutos</div>
                  </div>
                  <div className="header__content__top__countdown-container__time-container">
                    <div className="seconds">{dateDiff.seconds}</div>
                    <div className="seconds-label">Segundos</div>
                  </div>
                </div>
              </div>
              <div className="header__content__bottom">
                <div>
                  <p>MiLegalista esta en Silicon Valley construyendo la mejor experiencia</p>
                </div>
                <div className="header__content__bottom__contact-info">
                  <a href="https://www.instagram.com/milegalista/"><img src="/img/instagram-icon.png" alt="" /></a>
                  <p>fernandosuarez@milegalista.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
