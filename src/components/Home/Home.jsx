import { WelcomeContainer } from './Home.styled';

const Home = () => {
  return (
    <WelcomeContainer>
      <p>
        <span>Hello everyone!</span>👋🏻
      </p>
      <p>
        <span>
          We don't collect your personal data. So feel free to join and keep
          your contacts here!
        </span>
        😉
      </p>
    </WelcomeContainer>
  );
};

export default Home;
