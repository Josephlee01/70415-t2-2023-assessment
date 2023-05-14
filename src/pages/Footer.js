import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  background-color: #333;
  color: #fff;
  padding: 20px;
  width: 100%;
  position: fixed;
  right:0;
  bottom: 0;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  /* margin: 0 auto; */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>WIC 70415 Jinwoong LEE</ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
