import { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

const useCheckIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(isBrowser ? window.innerWidth > 600 : false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
};

export default useCheckIsDesktop;
