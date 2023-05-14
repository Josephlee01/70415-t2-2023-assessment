import styled from 'styled-components';

  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    /* margin-top: 20px; */
  `;

const About = () => {
  return (
    <PageContainer>
      <h1>JINWOONG LEE</h1>
      <h2>70415</h2>
      <h2>gomagom113@gmail.com</h2>

    </PageContainer>
  );
};

export default About;
