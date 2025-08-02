// components/BrandMarquee.js
import styled, { keyframes } from 'styled-components';
import { brands } from './Brand';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

// ✅ Smooth scroll animation from 0% to -50% (not 100% to -100%)
const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
`;

const MarqueeContent = styled.div`
  display: flex;
  width: fit-content;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
  animation-play-state: running;
  transition: all 0.3s ease;

  &:hover {
    animation-play-state: paused;
  }
`;

const BrandItem = styled.span`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
`;

export default function BrandMarquee() {
  const fullBrandList = brands.concat(brands); // duplicate to prevent blank gap

  return (
    <Section id="packages">
      <SectionDivider divider />
      <SectionTitle>Packages That Power My Code</SectionTitle>
      <SectionText>
        A collection of battle-tested NPM packages and libraries I’ve worked with —
        optimized for performance, flexibility, and modern development.
      </SectionText>

      <MarqueeContainer>
        <MarqueeContent>
          {fullBrandList.map((brand, index) => (
            <BrandItem key={index}>{brand}</BrandItem>
          ))}
        </MarqueeContent>
      </MarqueeContainer>
    </Section>
  );
}
