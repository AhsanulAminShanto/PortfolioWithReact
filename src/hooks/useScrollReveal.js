import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });
    sr.reveal('.home-content, .heading', { delay: 200 });
    sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', {
      origin: 'bottom',
    });
  }, []);
};

export default useScrollReveal;
