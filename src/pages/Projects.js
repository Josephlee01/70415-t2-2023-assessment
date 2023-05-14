import styled from 'styled-components';

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
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Projects = () => {
  return (
    <PageContainer>
      <Title>Cyberbullying</Title>

      <Description>
        <Description>
          Cyberbullying refers to the act of using digital communication tools,
          such as social media platforms, emails, or text messages, to harass,
          intimidate, or harm someone else. It involves repeated and deliberate
          aggressive behavior that is intended to cause emotional distress or
          humiliation. Cyberbullying can take various forms, including sending
          threatening messages, spreading rumors, sharing embarrassing photos or
          videos without consent, or creating fake profiles to harass someone.
        </Description>

        <Description>
          The impact of cyberbullying can be significant and long-lasting,
          affecting the mental and emotional well-being of the person targeted.
          It can lead to increased levels of stress, anxiety, depression, and
          even thoughts of self-harm or suicide in severe cases. It is crucial
          to address cyberbullying promptly and take appropriate actions to
          protect the victim.
        </Description>

        <Subtitle>
          If you or someone you know is being cyberbullied, here are some steps
          you can take:
        </Subtitle>

        <Description>
          1. Don't respond or retaliate: It's important not to engage with the
          cyberbully, as it may escalate the situation further. Responding with
          kindness or reasoning is unlikely to resolve the issue. <br />
          2. Save the evidence: Keep records of the cyberbullying incidents,
          including screenshots, messages, or any other form of communication.
          This evidence can be useful when reporting the issue. <br />
          3. Block the bully: Use the privacy settings on social media platforms
          or other online platforms to block the person who is cyberbullying
          you. This will help limit their access to your profile and prevent
          further harassment. <br />
          4. Report the bullying: Report the cyberbullying to the relevant
          platform or website where it is occurring. Most platforms have
          policies against cyberbullying and mechanisms to report such
          incidents. Provide them with the evidence you've collected. <br />
          5. Seek support: Reach out to someone you trust, such as a friend,
          family member, teacher, or counselor. They can offer guidance, advice,
          and emotional support during this challenging time. <br />
          <br />
          6. Involve authorities if necessary: In severe cases of cyberbullying,
          where there are threats or criminal activities involved, it may be
          appropriate to involve local law enforcement. They can guide you on
          legal actions that can be taken. <br />
          <br />
        </Description>
        <Subtitle>
          Remember, it is essential to prioritize your safety and well-being.
          Seeking help from trusted individuals or professionals can provide the
          necessary support and guidance to deal with cyberbullying effectively.
        </Subtitle>
      </Description>
    </PageContainer>
  );
};

export default Projects;
