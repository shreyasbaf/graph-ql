import styled from "styled-components";

export const ModalWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height: 100px;
`;

export const FlexBox = styled.div<any>`
  display: flex;
  flex-direction:${({ fd }) => fd || 'row'}; ;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  width: ${({ width }) => width || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  gap: ${({ gap }) => gap || '4px'};
`;