import Header from './header/Header';
import mathImg from '../assets/math_image.svg';

const content = {
  title: 'Welcome to our page!',
  description:
    '"Math Magicians" is a website for all fans of mathematics. It is a Single Page APP (SPA) developed with React that allows users to:',
  features: ['Do Math Calculations', 'Print Math related quotes'],
};

const Home = () => (
  <>
    <Header />
    <main className="home">
      <div className="container">
        <div className="home__content">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <ul>
            {content.features.map((feature) => (
              <li key={Math.random() * 100}>{feature}</li>
            ))}
          </ul>
        </div>
        <img className="home__image" src={mathImg} alt="Math" />
      </div>
    </main>
  </>
);

export default Home;
