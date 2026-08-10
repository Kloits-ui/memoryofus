// 1. Fungsi Sapaan Berdasarkan Waktu
function updateGreeting() {
  const greetingElement = document.getElementById("live-greeting");
  if (!greetingElement) return;

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

  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${hour}:${minutes}`;

  greetingElement.innerHTML = `${greetingText} <br> <span style="font-size:12px; color: #A1A1AA; font-weight: normal;">${timeString}</span>`;
}

updateGreeting();
setInterval(updateGreeting, 60000);

// 2. Fitur Hitung Hari Bersama
const START_DATE = new Date("2026-04-20T00:00:00");

function updateCounter() {
  const now = new Date();
  const diff = now - START_DATE;

  if (diff < 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl && hoursEl && minutesEl && secondsEl) {
    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }
}

setInterval(updateCounter, 1000);
updateCounter();

// 3. Fitur Pemutar Musik (Aman dari Error)
const musicBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");
let isPlaying = false;

if (musicBtn && bgMusic) {
  musicBtn.addEventListener("click", () => {
    if (isPlaying) {
      bgMusic.pause();
      musicBtn.innerHTML = "🎵";
      musicBtn.classList.remove("playing");
    } else {
      bgMusic
        .play()
        .then(() => {
          musicBtn.innerHTML = "🎶";
          musicBtn.classList.add("playing");
        })
        .catch((error) => {
          alert("yaw!");
        });
    }
    isPlaying = !isPlaying;
  });
}

// 4. Logika Modal Ridho (TANPA PASSCODE / BUKA LANGSUNG)
const modal = document.getElementById("ridho-modal");
const openBtn = document.getElementById("open-ridho-modal");
const closeBtn = document.getElementById("close-ridho-modal");

const lockScreen = document.getElementById("modal-lock-screen");
const secretContent = document.getElementById("modal-secret-content");

if (openBtn && modal) {
  openBtn.addEventListener("click", () => {
    // 1. Munculkan modal utama
    modal.classList.add("active");

    // 2. Sembunyiin gembok (kalau ada) & Tampilkan isi rahasia
    if (lockScreen) lockScreen.style.display = "none";
    if (secretContent) secretContent.style.display = "block";

    // 3. Reset tampilan ke daftar Tahun
    const vYears = document.getElementById("view-years");
    const vMonths = document.getElementById("view-months");
    const vDays = document.getElementById("view-days");
    const vContent = document.getElementById("view-content");

    if (vYears) vYears.style.display = "block";
    if (vMonths) vMonths.style.display = "none";
    if (vDays) vDays.style.display = "none";
    if (vContent) vContent.style.display = "none";
  });
}

if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

// // 4. Logika Modal Ridho (Lock Passcode)
// const modal = document.getElementById("ridho-modal");
// const openBtn = document.getElementById("open-ridho-modal");
// const closeBtn = document.getElementById("close-ridho-modal");

// const lockScreen = document.getElementById("modal-lock-screen");
// const secretContent = document.getElementById("modal-secret-content");
// const passInput = document.getElementById("passcode-input");
// const unlockBtn = document.getElementById("passcode-btn");
// const errorMsg = document.getElementById("passcode-error");

// const SECRET_PASSCODE = "3-26118";

// function resetModalState() {
//   if (lockScreen && secretContent && passInput && errorMsg) {
//     lockScreen.style.display = "block";
//     secretContent.style.display = "none";
//     passInput.value = "";
//     errorMsg.textContent = "";
//   }
// }

// if (openBtn && modal && closeBtn) {
//   openBtn.addEventListener("click", () => {
//     resetModalState();
//     modal.classList.add("active");
//   });

//   closeBtn.addEventListener("click", () => {
//     modal.classList.remove("active");
//   });

//   modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       modal.classList.remove("active");
//     }
//   });

//   function checkPasscode() {
//     if (passInput && passInput.value === SECRET_PASSCODE) {
//       lockScreen.style.display = "none";
//       secretContent.style.display = "block";
//       errorMsg.textContent = "";
//     } else if (errorMsg && passInput) {
//       errorMsg.textContent = "Sandi salah, coba lagi ya! 🔒";
//       passInput.value = "";
//       passInput.focus();
//     }
//   }

//   if (unlockBtn) unlockBtn.addEventListener("click", checkPasscode);

//   if (passInput) {
//     passInput.addEventListener("keypress", (e) => {
//       if (e.key === "Enter") {
//         checkPasscode();
//       }
//     });
//   }
// }

// Data Isi Hati Mentah


// Ganti ini sama tanggal jadian lu (Format: YYYY-MM-DD)
const startDate = new Date("2026-04-20"); // Contoh: 15 November 2025
const today = new Date();

// Ngitung udah berapa bulan bareng-bareng
let monthsTogether =
  (today.getFullYear() - startDate.getFullYear()) * 12 +
  (today.getMonth() - startDate.getMonth());

// Nyesuaiin kalau belum lewat tanggal jadian di bulan ini
if (today.getDate() < startDate.getDate()) {
  monthsTogether--;
}

// LOGIKA TRIGGER PERAYAAN:
// Cek kalau tanggal hari ini SAMA dengan tanggal jadian (dan minimal udah 1 bulan)
if (today.getDate() === startDate.getDate() && monthsTogether > 0) {
  // Cek apakah pas kelipatan 12 bulan (Anniversary Tahunan)
  if (monthsTogether % 12 === 0) {
    let years = monthsTogether / 12;
    let labelTahun = years > 1 ? `${years} Years` : "1 Year"; // 1 Year vs 2 Years

    tampilkanPerayaan(
      `Happy ${labelTahun} Anniversary! 🎉`,
      `Gak kerasa udah ${years} tahun kita bareng-bareng. Makasih ya udah ada terus di hidup aku... 🤍`,
    );
  } else {
    // Perayaan Bulanan Biasa
    tampilkanPerayaan(
      `Happy ${monthsTogether} Months! 💖`,
      `Cieee nambah bulan ke-${monthsTogether} nih kita. Tetep bareng-bareng terus ya!`,
    );
  }
}

// Fungsi buat nampilin Pop-up/Alert perayaan
function tampilkanPerayaan(judul, pesan) {
  // Lu bisa ganti ini pakai Modal/Pop-up HTML buatan lu biar lebih estetik
  // Sementara gw pake alert biasa buat ngetes logikanya jalan atau nggak
  console.log(judul + " - " + pesan);

  // Nanti kita kaitkan ke elemen HTML modal di sini
  document.getElementById("anniv-title").innerText = judul;
  document.getElementById("anniv-msg").innerText = pesan;
  document.getElementById("anniv-modal").style.display = "block";
}
