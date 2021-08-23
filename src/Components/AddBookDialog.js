import React from "react";

import { Slide, Dialog, DialogTitle } from "@material-ui/core";
import PropTypes from "prop-types";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddBookDialog(props) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open} TransitionComponent={Transition}>
      <DialogTitle>Add book information</DialogTitle>
    </Dialog>
  );
}

AddBookDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
