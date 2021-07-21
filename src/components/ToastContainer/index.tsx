import React, { useCallback } from "react";

import Toast from "./Toast";

import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { ToastMessage, useToast } from "../../hooks/toast";

import { Container } from "./styles";

interface ToastConteinerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastConteinerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
