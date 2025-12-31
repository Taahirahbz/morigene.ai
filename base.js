// ================= PARTICLES =================
if (!document.body.classList.contains('no-particles')) {
  const particleContainer = document.getElementById('particles');
  const particleCount = 80;

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.classList.add('particle', Math.random() > 0.5 ? 'magenta' : 'white');

    const size = Math.random() * 4 + 2;
    p.style.width = p.style.height = size + 'px';
    p.style.left = Math.random() * window.innerWidth + 'px';
    p.style.top = Math.random() * window.innerHeight + 'px';
    p.style.animationDuration = (3 + Math.random() * 3) + 's';

    particleContainer.appendChild(p);
  }
}

// ================= BACK BUTTON & PAGE TRANSITION =================
const backBtn = document.querySelector('.back-btn');
if(backBtn){
  backBtn.addEventListener('click', ()=>{
    const page = document.getElementById('page');
    page.classList.add('fade-out');
    setTimeout(()=>{ window.location.href='index.html'; }, 400);
  });
}
