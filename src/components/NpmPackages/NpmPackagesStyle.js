// components/BrandMarquee.js
import styled, { keyframes } from 'styled-components';
import { brands } from './Brand';

const scroll = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background: #f9f9f9;
  padding: 1rem 0;
`;

const MarqueeContent = styled.div`
  display: inline-flex;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
`;

const BrandItem = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0 2rem;
  color: #333;
`;

export default function BrandMarquee() {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        {brands.concat(brands).map((brand, index) => (
          <BrandItem key={index}>{brand}</BrandItem>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
}
