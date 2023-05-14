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

const Kpi = () => {
  return (
    <PageContainer>
      <Title>KPI</Title>
      <Subtitle>How to accomplish the Project Goal ?</Subtitle>
      <Description>
        <li>
          Schedule Performance Index (SPI): SPI measures the project's schedule
          efficiency by comparing the budgeted value of work performed to the
          actual value of work performed. An SPI value greater than 1 indicates
          the project is ahead of schedule, while a value less than 1 suggests
          schedule delays. SPI = Earned Value (EV) / Planned Value (PV)
        </li>
        <p></p>
        <li>
          2. Cost Performance Index (CPI): CPI measures the project's cost
          efficiency by comparing the budgeted value of work performed to the
          actual cost of work performed. A CPI value greater than 1 indicates
          the project is under budget, while a value less than 1 suggests cost
          overruns. CPI = Earned Value (EV) / Actual Cost (AC)
        </li>
        <p></p>
        <li>
          3. Project Risk Exposure: This KPI measures the overall risk exposure
          of the project. It involves assessing the potential impact and
          likelihood of identified risks and quantifying their overall effect on
          the project's success. It helps project managers proactively manage
          and mitigate risks throughout the project lifecycle.
        </li>
        <p></p>
        <li>
          4. Customer Satisfaction: Customer satisfaction is a vital KPI that
          measures the satisfaction level of project stakeholders, including
          clients, end-users, and sponsors. It can be evaluated through surveys,
          feedback sessions, or ratings. High customer satisfaction indicates
          successful project delivery that meets or exceeds stakeholder
          expectations. 5. Stakeholder Engagement: This KPI assesses the level
          of engagement and collaboration with project stakeholders. It involves
          tracking stakeholder participation in project activities, stakeholder
          feedback, and responsiveness to stakeholder needs and concerns.
          Effective stakeholder engagement ensures their involvement and support
          throughout the project.`
        </li>
      </Description>
    </PageContainer>
  );
};

export default Kpi;
