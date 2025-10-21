    const faders = document.querySelectorAll('.fade');
    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fade => {
      appearOnScroll.observe(fade);
    });
    const backToTop = document.getElementById('backToTop');

  // 當滾動超過300px就顯示按鈕
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // 點擊平滑回頂端
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
// === Gallery 左右滑動 ===
const filmStrip = document.querySelector('.film-strip');
const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');

leftBtn.addEventListener('click', () => {
  filmStrip.scrollBy({ left: -300, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
  filmStrip.scrollBy({ left: 300, behavior: 'smooth' });
});

