import React from 'react';

const useEmail = () => {
  const [email, setEmail] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setEmail('Paolo Cargnin');
    }, 1000);
  }, []);

  return [
    email === null,
    email,
  ];
};

export default useEmail;