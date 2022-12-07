import styled from "styled-components";

export const ModalBody = styled.div<any>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 100000000 !important;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  overflow: hidden;
`;

export const ModalContent = styled.div<any>`
  width: 80%;
  background-color: white;
  border: 1px solid red;
  position: absolute;
  display: inline-block;
  margin: 0 auto;
  border: none;
  border-radius: ${(props) => props.borderRadius};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: ${({ overflow }) => (!overflow ? "none" : "auto")};
  padding: 0px;
  max-height: 90vh;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  z-index: 100000 !important;
  @media (min-width: 1024px) {
    max-width: 650px;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
`;

export const ModalHeadingWrapper = styled.div<any>`
  min-height: 70px;
  display: grid;
  place-items: center;
`;

export const ModalHeadingText = styled.div<any>`
  font-size: ${({ headerTextFontSize }) =>
    headerTextFontSize ? headerTextFontSize : "18px"};
  font-weight: 700;
  color: black;
  overflow-wrap: anywhere;
  text-align: center;
  padding: 24px 55px;
`;

export const ModalClose = styled.div<{ isOutside?: boolean }>`
  position: absolute;
  top: ${(props) => (props.isOutside ? "-45px" : "24px")};
  right: ${(props) => (props.isOutside ? "-45px" : "20px")};
  cursor: pointer;
  height: ${(props) => (props.isOutside ? "45px" : "24px")};
  width: ${(props) => (props.isOutside ? "45px" : "24px")};
  z-index: 1;
  color: black;
`;
