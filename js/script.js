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


  // 以 AJAX 送出（不跳頁），顯示成功/失敗
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.style.display = 'none';

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, { method: form.method, body: data, headers: { 'Accept': 'application/json' }});
      if (res.ok) {
        statusEl.textContent = '已送出！我會盡快回覆你 🙌';
        statusEl.style.display = 'block';
        form.reset();
      } else {
        statusEl.textContent = '送出失敗，請稍後再試';
        statusEl.style.display = 'block';
      }
    } catch (err) {
      statusEl.textContent = '請再試一次。';
      statusEl.style.display = 'block';
    }
  });

