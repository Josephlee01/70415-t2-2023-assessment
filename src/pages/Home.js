import styled from 'styled-components';
import Carousel from './Carousel';

const Home = () => {
  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    /* margin-top: 20px; */
  `;

  const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 20px;
    color: #175252;
  `;

  const Subtitle = styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
    color: #5a5a5a;
  `;

  const Description = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    `;
  const ExternalLink = styled.a`
    padding: 10px 20px;
    font-size: 16px;
    background-color: #ff8c00;
    color: #5f1e1e;
    border: none;
    margin-left: 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #ffb060;
    }
  `;

const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
];

  return (
    <PageContainer>
      <Title>ICT50220: Diploma of Information Technology</Title>
      <Title>Develop ICT Solution</Title>
      <Subtitle>WIC 70415</Subtitle>
      <Subtitle>Jinwoong Lee</Subtitle>
      <Description>
        Hello! I'm Jinwoong Lee!
      </Description>
      <ButtonContainer>
                <ExternalLink
          href="https://docs.google.com/presentation/d/1gfbAbRSrOhl2eVX7AhdQWpoxpVAuQwj4eUvQGp255bc/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Assessment Task 2 Powerpoint
        </ExternalLink>
        <ExternalLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSeFwYUjMHjx7ETpzIJbvSDhhWhxQhJvUkcjmbalQeR32KWNMA/viewform?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave your feedback
        </ExternalLink>
      </ButtonContainer>
      <Carousel images={images}/>
    </PageContainer>
  );
};

export default Home;
