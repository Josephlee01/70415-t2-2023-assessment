import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  white-space: pre-line;
  /* margin-top: 20px; */
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  white-space: pre-line;
`;
const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  margin-left: 30px;
`;

const NavLink = styled.a`
  color: #000000;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffbb00;
    cursor: pointer;
  }
`;
const Projects = () => {
  return (
    <>
      <PageContainer>
        <img src="/assets/0.jpg" alt="s1" />
        <img src="/assets/1.jpg" alt="s1" />
        <img src="/assets/2.jpg" alt="s1" />
        <img src="/assets/3.jpg" alt="s1" />
        <img src="/assets/4.jpg" alt="s1" />
        <img src="/assets/5.jpg" alt="s1" />
        <img src="/assets/6.jpg" alt="s1" />
        <img src="/assets/7.jpg" alt="s1" />
        <img src="/assets/8.jpg" alt="s1" />
        <img src="/assets/9.jpg" alt="s1" />
        <img src="/assets/10.jpg" alt="s1" />
        <img src="/assets/11.jpg" alt="s1" />
      </PageContainer>
    </>
  );
};

export default Projects;
