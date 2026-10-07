import { useEffect, useState } from "react";
import { heroSlides, heroTrust } from "../../data/home";
import { photos } from "../../data/photos";
import Icon from "../ui/Icons";
import Shot from "../ui/Shot";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const go = (step) => {
    setIndex((current) => (current + step + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="hero-wrap">
      <div className="container">
        <div className="hero">
          <button className="hero__arrow hero__arrow--prev" type="button" aria-label="Previous slide" onClick={() => go(-1)}>
            ‹
          </button>
          <button className="hero__arrow hero__arrow--next" type="button" aria-label="Next slide" onClick={() => go(1)}>
            ›
          </button>

          <div className="hero__copy">
            <p className="eyebrow">{slide.eyebrow}</p>
            <h1>
              {slide.title.map((line, lineIndex) => (
                <span key={line} className={lineIndex === slide.accentLine ? "is-accent" : ""}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero__sub">{slide.subtitle}</p>
            <a className="btn" href={slide.href}>
              {slide.cta}
              <Icon name="arrow" />
            </a>
          </div>

          <div className="stage" aria-hidden="true">
            <p className="stage__script">
              Gadgets
              <span>for a Smarter</span>
              <span>Tomorrow</span>
            </p>
            <div className="stage__drone"><Shot src={photos.drone} alt="" /></div>
            <div className="stage__laptop"><Shot src={photos.laptop} alt="" /></div>
            <div className="stage__phone stage__phone--back"><Shot src={photos.iphoneBlue} alt="" /></div>
            <div className="stage__phone stage__phone--front"><Shot src={photos.iphoneSilver} alt="" /></div>
            <div className="stage__cans"><Shot src={photos.headphones} alt="" /></div>
            <div className="stage__watch"><Shot src={photos.watch} alt="" /></div>
            <div className="stage__buds"><Shot src={photos.buds} alt="" /></div>
            <div className="stage__camera"><Shot src={photos.camera} alt="" /></div>
            <div className="stage__pad"><Shot src={photos.gamepad} alt="" /></div>
          </div>

          <ul className="hero__trust">
            {heroTrust.map((item) => (
              <li key={item.label}>
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <div className="hero__dots">
            {heroSlides.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                className={dotIndex === index ? "is-active" : ""}
                aria-label={`Show slide ${dotIndex + 1}`}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
