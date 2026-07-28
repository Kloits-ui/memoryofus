// Fungsi untuk mengatur sapaan berdasarkan waktu lokal
function updateGreeting() {
  const greetingElement = document.getElementById("live-greeting");
  const now = new Date();
  const hour = now.getHours();

  let greetingText = "";

  if (hour >= 5 && hour < 11) {
    greetingText = "Good Morning, DORI 🌅";
  } else if (hour >= 11 && hour < 15) {
    greetingText = "Good Afternoon, DORI ☀️";
  } else if (hour >= 15 && hour < 18) {
    greetingText = "Good Afternoon, DORI 🌤️";
  } else {
    greetingText = "Good Night, DORI 🌙";
  }

  // Tambahkan jam secara real-time
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${hour}:${minutes}`;

  greetingElement.innerHTML = `${greetingText} <br> <span style="font-size:12px; color: #A1A1AA; font-weight: normal;">Sekarang pukul ${timeString}</span>`;
}

// Jalankan fungsi saat web dibuka, dan update tiap 1 menit
updateGreeting();
setInterval(updateGreeting, 60000);

// --- Fitur Pemutar Musik ---
const musicBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.innerHTML = '🎵';
    musicBtn.classList.remove('playing');
  } else {
    // Memutar musik
    bgMusic.play().then(() => {
      musicBtn.innerHTML = '🎶';
      musicBtn.classList.add('playing');
    }).catch(error => {
      alert("Pastikan kamu sudah menaruh file lagu di folder assets/audio/lagu-kita.mp3 ya!");
    });
  }
  isPlaying = !isPlaying;
});

// --- Logika Modal Ridho dengan Lock Passcode ---
const modal = document.getElementById('ridho-modal');
const openBtn = document.getElementById('open-ridho-modal');
const closeBtn = document.getElementById('close-ridho-modal');

const lockScreen = document.getElementById('modal-lock-screen');
const secretContent = document.getElementById('modal-secret-content');
const passInput = document.getElementById('passcode-input');
const unlockBtn = document.getElementById('passcode-btn');
const errorMsg = document.getElementById('passcode-error');

// 🔑 GANTI SANDI DI SINI (bebas mau angka/kata, misal: "1205" atau "putri")
const SECRET_PASSCODE = "261148"; 

function resetModalState() {
  lockScreen.style.display = 'block';
  secretContent.style.display = 'none';
  passInput.value = '';
  errorMsg.textContent = '';
}

if (openBtn && modal && closeBtn) {
  // Buka Modal (Otomatis Lock)
  openBtn.addEventListener('click', () => {
    resetModalState();
    modal.classList.add('active');
  });

  // Tutup Modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Fungsi Cek Sandi
  function checkPasscode() {
    if (passInput.value === SECRET_PASSCODE) {
      lockScreen.style.display = 'none';
      secretContent.style.display = 'block';
      errorMsg.textContent = '';
    } else {
      errorMsg.textContent = 'Sandi salah, coba lagi ya! 🔒';
      passInput.value = '';
      passInput.focus();
    }
  }

  unlockBtn.addEventListener('click', checkPasscode);

  // Biar bisa pencet ENTER di keyboard
  passInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkPasscode();
    }
  });
}