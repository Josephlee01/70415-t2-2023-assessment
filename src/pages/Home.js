import styled from 'styled-components';

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

  return (
    <PageContainer>
      <Title>ICT50220: Diploma of Information Technology</Title>
      <Title>Contribute to organizational privacy and contingency plans</Title>
      <Subtitle>WIC 70415</Subtitle>
      <Subtitle>Jinwoong Lee</Subtitle>
      <Description>Hello! I'm Jinwoong Lee!</Description>
      <ButtonContainer>
        <ExternalLink
          href="/assets/A1.pdf"
          target="_blank"
          download="/assets/A1.pdf"
          rel="noopener noreferrer"
        >
          Assessment Task 1 PDF Download
        </ExternalLink>
        <ExternalLink
          href="/assets/A2.pdf"
          target="_blank"
          download="/assets/A2.pdf"
          rel="noopener noreferrer"        >
          Assessment Task 2 PDF Download
        </ExternalLink>
                <ExternalLink
          href="https://forms.gle/191vbggWwzwCXCwR9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leave your feedback
        </ExternalLink>
      </ButtonContainer>
      <Description></Description>
      <img src="/qr.png" alt="qr" width={150} height={150} />
    </PageContainer>
  );
};

export default Home;
