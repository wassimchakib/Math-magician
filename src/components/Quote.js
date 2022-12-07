import React, { useEffect, useState } from 'react';
import Header from './header/Header';
import quoteImg from '../assets/quote_image.svg';

const quotes = [
  {
    title: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein, German theoretical physicist',
    imgSrc:
      'https://webcdn.prodigygame.com/95dedcb-1133/static/8f462d5df422162700031be86b1df3be/10179/f1b2bbe8-3701-4e7e-9654-976d901f38a5_Albert-Einstein.webp',
  },
  {
    title:
      'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
    author: 'Shakuntala Devi, Indian writer and mental calculator',
    imgSrc:
      'https://webcdn.prodigygame.com/95dedcb-1133/static/8306e3582e4bb9971299446a3d262e65/60d2a/70d27e5c-65d6-488f-be8e-6574c98f66a0_Shakuntala-Devi.webp',
  },
  {
    title:
      'Mathematics is the most beautiful and most powerful creation of the human spirit.',
    author: 'Stefan Banach, Polish mathematician',
    imgSrc:
      'https://mathematics.in.ua/media/k2/items/cache/e02fde07d49ee258cc3f6d1b19207757_XL.jpg',
  },
  {
    title:
      'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics.',
    author: 'Katherine Johnson, African-American mathematician',
    imgSrc:
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Katherine_Johnson_1983.jpg',
  },
  {
    title:
      'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.',
    author: 'Richard Courant, German-American mathematician',
    imgSrc: 'https://www.bibmath.net/bios/images/courant.jpg',
  },
  {
    title:
      'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
    author: 'Albert Einstein',
    imgSrc:
      'https://webcdn.prodigygame.com/95dedcb-1133/static/8f462d5df422162700031be86b1df3be/10179/f1b2bbe8-3701-4e7e-9654-976d901f38a5_Albert-Einstein.webp',
  },
  {
    title:
      'What is mathematics? It is only a systematic effort of solving puzzles posed by nature.',
    author: 'Shakuntala Devi',
    imgSrc:
      'https://webcdn.prodigygame.com/95dedcb-1133/static/8306e3582e4bb9971299446a3d262e65/60d2a/70d27e5c-65d6-488f-be8e-6574c98f66a0_Shakuntala-Devi.webp',
  },
  {
    title: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester, English mathematician',
    imgSrc:
      'https://www.irishtimes.com/resizer/Sy4ESSYKdgeMpogAPe_1B6BuJts=/1600x1600/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/MMWDTAUG3N7S3RQP262JCNWQOI.jpg',
  },
  {
    title:
      'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.',
    author: 'David Hilbert, German mathematician',
    imgSrc: 'https://miro.medium.com/max/800/1*ahy12g2hFP21x7YolyQ_Ug.jpeg',
  },
];

const Quote = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 9),
  );

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 9);
    setRandomNumber(randomNumber);
  }, []);
  return (
    <>
      <Header />
      <main className="quote">
        <div className="container">
          <div className="quote__description">
            <p>
              &quot;
              {quotes[randomNumber].title}
              &quot;
              <span>{quotes[randomNumber].author}</span>
            </p>
          </div>
          <img
            className="quote__image"
            src={quotes[randomNumber].imgSrc || quoteImg}
            alt="quote img"
          />
        </div>
      </main>
    </>
  );
};

export default Quote;
