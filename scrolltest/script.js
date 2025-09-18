(function () {
  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = scrollable > 0 ? Math.min(100, Math.max(0, (scrolled / scrollable) * 100)) : 0;
    document.body.style.setProperty('--scroll-progress', progress.toFixed(2));
  };

  updateProgress();
  document.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
})();
