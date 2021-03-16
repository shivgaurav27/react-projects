import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");

function IdleTimeConatiner() {
  const idleTimerRef = useRef(null);
  const sessionTimeOutRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsopen, setModalIsOpen] = useState(false);

  const onIdle = () => {
    console.log("user is idle");
    setModalIsOpen(true);
    sessionTimeOutRef.current = setTimeout(logOut, 5000);
  };
  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeOutRef.current);
    console.log("user is active");
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeOutRef.current);

    console.log("user has logged out");
  };

  return (
    <div>
      {isLoggedIn ? <h2>Hello logger</h2> : <h2>hello guest</h2>}
      <Modal isOpen={modalIsopen}>
        <h2>You have been idle for a while !</h2>
        <p>you will be logged out soon </p>
        <div>
          <button onClick={logOut}> Log me out </button>
          <button onClick={stayActive}> keep me signed in </button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={5 * 1000}
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
}

export default IdleTimeConatiner;
