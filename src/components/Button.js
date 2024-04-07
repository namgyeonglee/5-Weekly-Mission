import styled from "styled-components";

function Button({ size, children }) {
  return <StyledButton size={size}>{children}</StyledButton>;
}

const SIZES = {
  large: 18,
  medium: 14,
};

const StyledButton = styled.button`
  font-size: ${({size}) => SIZES[size]}px;
  font-weight: 600;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  border: none;
  border-radious: 8px;
  color: var(--Gray6);
  background: var(--gra-purpleblue-to-skyblue, linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%));
`;

export default Button;
