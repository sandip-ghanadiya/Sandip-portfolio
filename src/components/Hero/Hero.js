import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Sandip Ghanadiya
        </SectionTitle>
        <SectionText>
         With over 4+ years of experience in the IT industry, I have developed expertise in leading and managing technology-specific teams to deliver innovative solutions. I specialize in handling team dynamics, distributing work efficiently, and ensuring project milestones are accurately estimated and executed. I am actively involved in scope preparation, task assignments, follow-ups, and troubleshooting to ensure seamless project delivery.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          {/* <LinkButton alt="upwork" href={UpworkUrl} target="_blank">
            Upwork
          </LinkButton>
          <LinkButton alt="fiverr" href={FiverUrl} target="_blank">
            Fiverr
          </LinkButton> */}
          <LinkButton alt="resume" href={ResumeUrl} target="_blank">
            Resume
          </LinkButton>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
