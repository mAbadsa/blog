import React, { FC, JSXElementConstructor, ReactElement } from "react";

import { Modal as MuiModal, ModalProps, useTheme } from "@material-ui/core";
import useStyles from "./styles";

type HandleEventFunction = (
  event: {},
  reason: "backdropClick" | "escapeKeyDown"
) => void;

const MModal: FC<{
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  props?: ModalProps;
  open: boolean;
  handleClose: HandleEventFunction;
}> = ({ children, open, handleClose, props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      {...props}
    >
      {children}
    </MuiModal>
  );
};

export default MModal;
