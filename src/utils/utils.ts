export const generateTimeoutMessage = (
  message: string,
  setMessage: (value: string | null) => void
) => {
  setMessage(message);
  setTimeout(() => {
    setMessage(null);
  }, 3000);
};
