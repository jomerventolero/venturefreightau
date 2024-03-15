const useParallax = () => {
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach(element => {
        const speed = element.dataset.speed;
        element.style.transform = `translateY(${scrollValue * speed}px)`;
      });
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', handleScroll);
    }
  };
};

export default useParallax;
