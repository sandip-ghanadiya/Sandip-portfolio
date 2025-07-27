import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillPhone, AiFillMail } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";
import {
  FacebookUrl,
  GithubUrl,
  LinkedInUrl,
  MobileNumber,
  PersonalEmail,
} from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      {/* <LinkList>
        <SocialContainer>
          <SocialIcons href={GithubUrl} target="_blank">
            <AiFillPhone size="3rem" />
          </SocialIcons>
          <SocialIcons href={LinkedInUrl} target="_blank">
            <AiFillMail size="3rem" />
          </SocialIcons>
          <SocialIcons href={FacebookUrl} target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </LinkList> */}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Made with ❤️ by Sandip Ghanadiya</Slogan>
        </CompanyContainer>
        {/* <SocialContainer>
          <SocialIcons href={GithubUrl} target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href={LinkedInUrl} target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href={FacebookUrl} target="_blank">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
        </SocialContainer> */}
        <SocialContainer>
          <SocialIcons href={`tel:${MobileNumber}`} title={MobileNumber} target="_blank">
            <AiFillPhone size="3rem" />
          </SocialIcons>
          <SocialIcons href={`mailto:${PersonalEmail}`} title={PersonalEmail} target="_blank">
            <AiFillMail size="3rem" />
          </SocialIcons>
          <SocialIcons href={LinkedInUrl} title={LinkedInUrl} target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
