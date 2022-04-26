import { styled, keyframes, css } from 'frontity';
import { spinnerVariant } from '../../utils/framer-variants';

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

const Spinner = () => {
  return (
    <div>
      <Container>
        <div>
          <div css={bar(1)} />
          <div css={bar(2)} />
          <div css={bar(3)} />
          <div css={bar(4)} />
          <div css={bar(5)} />
        </div>
      </Container>
    </div>
  );
};

export default Spinner;

const bar = (index) => css`
  background-color: #1896a4;
  width: 20px;
  height: 200px;
  margin: 40px;
  border-radius: 0;
  display: inline-block;
  animation: ${scale} 1s ${index * 0.1}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
  animation-fill-mode: both;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: white;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;
