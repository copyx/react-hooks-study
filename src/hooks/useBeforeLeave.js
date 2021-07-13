import { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  const onLeave = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', onLeave);
    return () => document.removeEventListener('mouseleave', onLeave);
  }, []);
}

export default useBeforeLeave;