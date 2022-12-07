import React, { useState } from "react";
import {
  ModalBody,
  ModalClose,
  ModalContent,
  ModalHeadingText,
  ModalHeadingWrapper,
} from "./CustomModal.styles";

interface Props {
  headerText?: string | any;
  show: boolean;
  toggleModal(value: boolean): void;
  children: React.ReactNode;
  disableCloseButton?: boolean;
  redirectingId?: string;
  executeOnClose?: () => void;
  alertModal?: boolean;
  setAlertModal?: any;
  executeOnOutSideClick?: any;
  headerTextFontSize?: string;
  overflow?: boolean;
  isCloseButtonOutside?: boolean;
  size?: "md" | "lg";
}

const CustomModal = (props: Props) => {
  const [lockScroll, setLockScroll] = useState(false);

  const {
    headerText,
    show,
    toggleModal,
    children,
    disableCloseButton,
    redirectingId,
    executeOnClose,
    alertModal,
    setAlertModal,
    executeOnOutSideClick,
    headerTextFontSize,
    size = "md",
    isCloseButtonOutside = false,
  } = props;

  const handleClickOutside = (e: any) => {
    setLockScroll(false);
    e.stopPropagation();
    if (!disableCloseButton) {
      e.stopPropagation();
      if (e.target === e.currentTarget) {
        e.stopPropagation();
        toggleModal(false);
      }
      if (executeOnClose) {
        e.stopPropagation();
        executeOnClose();
        setLockScroll(false);
      }
    }
  };

  return (
    <ModalBody
      show={show}
      onClick={(e: any) => {
        e.stopPropagation();
      }}
      onMouseDown={
        disableCloseButton
          ? (e: any) => {
              e.stopPropagation();
            }
          : handleClickOutside
      }
    >
      <ModalContent
        borderRadius={isCloseButtonOutside ? "25px" : "8px"}
        size={size}
        overflow={props.overflow === false ? false : true}
      >
        {headerText && (
          <ModalHeadingWrapper>
            <ModalHeadingText headerTextFontSize={headerTextFontSize}>
              {headerText}
            </ModalHeadingText>
          </ModalHeadingWrapper>
        )}
        {disableCloseButton ? null : (
          <ModalClose
            isOutside={isCloseButtonOutside}
            onClick={() => {
              !setAlertModal && toggleModal(!show);
              setAlertModal && setAlertModal(true);
            }}
          >
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 8.586L12.828 5.757L14.243 7.172L11.414 10L14.243 12.828L12.828 14.243L10 11.414L7.172 14.243L5.757 12.828L8.586 10L5.757 7.172L7.172 5.757L10 8.586Z"
                fill="currentColor"
              />
            </svg>
          </ModalClose>
        )}

        {children}
      </ModalContent>
    </ModalBody>
  );
};
export default CustomModal;
