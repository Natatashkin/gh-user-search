import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
`;

const InputWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
`;

export { HeaderContainer, InputWrapper };
