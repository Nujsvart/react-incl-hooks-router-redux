import React from "react";
import Card from "../Card/Card";
import classes from "./errormodal.module.css";

const ErrorModal = props => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.handleError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.handleError}>Okay</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
