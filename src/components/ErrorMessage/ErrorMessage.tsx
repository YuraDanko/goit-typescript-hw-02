interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div style={{ color: "red", fontWeight: "bold" }}>{message}</div>;
};

export default ErrorMessage;
