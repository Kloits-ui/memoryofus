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

// 4. Logika Modal Ridho (Lock Passcode)
const modal = document.getElementById("ridho-modal");
const openBtn = document.getElementById("open-ridho-modal");
const closeBtn = document.getElementById("close-ridho-modal");

const lockScreen = document.getElementById("modal-lock-screen");
const secretContent = document.getElementById("modal-secret-content");
const passInput = document.getElementById("passcode-input");
const unlockBtn = document.getElementById("passcode-btn");
const errorMsg = document.getElementById("passcode-error");

const SECRET_PASSCODE = "3-2611";

function resetModalState() {
  if (lockScreen && secretContent && passInput && errorMsg) {
    lockScreen.style.display = "block";
    secretContent.style.display = "none";
    passInput.value = "";
    errorMsg.textContent = "";
  }
}

if (openBtn && modal && closeBtn) {
  openBtn.addEventListener("click", () => {
    resetModalState();
    modal.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  function checkPasscode() {
    if (passInput && passInput.value === SECRET_PASSCODE) {
      lockScreen.style.display = "none";
      secretContent.style.display = "block";
      errorMsg.textContent = "";
    } else if (errorMsg && passInput) {
      errorMsg.textContent = "Sandi salah, coba lagi ya! 🔒";
      passInput.value = "";
      passInput.focus();
    }
  }

  if (unlockBtn) unlockBtn.addEventListener("click", checkPasscode);

  if (passInput) {
    passInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        checkPasscode();
      }
    });
  }
}

// Data Isi Hati Mentah
const diaryData = {
  2026: {
    4: {
      20: "Seneng banget akhirnya setelah sekian lama bisa pacaran sama PUPUT, akan sebahagia apa kita nantinya..",
    },
    5: {
      9: "Hari kelulusan PUPUT, gw kesel banget, udh beli bucket, coklat, udh rapih, malah gk bisa foto bareng ama dia di hari kelulusannya, bete banget dah, gw dateng pas acaranya selesai, tau gitu gw mending gausah dateng, datang cuman buat anter dia pulang doang",
      20: "Gw merasa kesepian karena PUPUT waktu itu kerja, gw bener bener kesepian, waktu buat kita berdua berkurang, hm..",
      27: "Cemburu karena orang lain bisa liat dia gk pake hijab, sedangkan gw egk, padahal gw pen ngerasa spesial, jadinya ya udh gk spesial",
      28: "Kesel banget, gw dibanding bandingan ama si chelo tai itu, karena gw gk lolos SNBT, sedangkan tmnny lolos, padahal gw pacarny, asal ngomong aja ih , hmm",
      29: "Kita sama2 minta terbuka, waktu itu gw ditanya mantan gw , gw jelasin gw jawab, giliran gw nanya masa lalu SMA di kek gmn, dia gk mau jawab, gk mau cerita.. bete gw..",
      31: "kita berdua dah mulai berantem, karena masalah kemarin dan kecemburuan, pas itu gw udh bener bener capek dan mau ungkapin semuany, dan omongan dia gk sesuai tindakan nya gajelas bikin kesel ajah ",
    },
    6: {
      1: `1/6, 09.00 arbans. sebelum ke intinya aku mau ngasih tau ini hal yg bikin aku sakit hati selama ini 
      KAMU BISA SKIP BAGIAN INI SIH KALO MAU gk masalah
      saat pelepasan kamu, yaa memang dari awal aku blg ny kgk bawa apa apa, dan niatnya aku mau suprise in kamu, tapi di saat H nya kamu baru ngabarin aku untuk datang saat acara ny dah selesai, aku dah beli bunga+coklat berpakaian rapih lohh, acarany dah selesai kamu baru ngabarin akuu, jatohny aku jadi kek tukang ojek yg anter kamu pulangg kerumah doang
      saat hari pelepasan kamu juga, kita niatny main kan, nh disitu kamu blg jangan main ke margo akh banyak temen temen aku ama pacarny , apakah kamu malu jalan ama aku dan semisalnya bakalan papasan sama temen kamu,  apakah itu sebuah tindakan kriminal makany kamu ngelarang main ke situ
      saat hari pelepasan kamu juga , baquet bunga yg aku kasih ke kamu post di story ig kan, nah itu belum 24 jam kamu udh hapus storyny, maksudnya apaa?
      soal mantan aku, kamu gk pernah blg kmu tau soal itu  darimana, aku tanya baik baik, tapi kamu gk jawab, giliran kamu nanya ke aku, kamu nuntut aku buat jawab dengan tegas
      kemarin aku minta kamu cerita masa lalu kamu pas smp->sma, tapi kamu alihin topik malah nanya ke soal mantan aku lagi, di situ posisi aku yg nanya dluan, kamu jawab dengan santai lgi malas cerita itu semuany
      see? kamu nuntut aku buat terbuka tapi kamu sendrii gk terbukaa sama aku, dan kamu selalu alihin topik jika topik yg aku bahas itu kamu gk sukaa, aku curiga di saat itu juga kamu nutupin sesuatu dan pasti ada alasan kamu gk mau cerita masa lalu smp->sma kamuu
      kemarin kamu bandingin  aku dengan  temen cowo kamu soal lolos utbk , aku sakit hati , kamu seenaknya ngetik kek gitu, gk mikir posisi aku kah kamu?
      omongan kamu gk sejalur ama tindakan kamu, soal itu cowo yg bercandain kamu, itu 1 sirkel kan ama kamu ama tmn deket kamu juga?, aku sgt yakin kalo kamu susah ngejauhin diaa walau udh kamu tegur ke dia, aku yakin bahkan jika kamu udah tegur kamu ttp buat ladenin dia bukanny diemin dia, walau kamu blg ke aku udh ngejauhin , susah ngejauhin pasti karena dia 1 sirkel/temen dket kamu kan dsn susah juga bagi aku untuk percaya sama kamu
      dan kamu bisa bisany post foto ama dia walau ada tmn cwe kamu di foto itu juga setelah kita slek soal cowo itu? kamu sehat?  mana di post sec acc lagi kerennnn dah hebat hebat, dan aku notice setiap foto kelas kmu itu cowo posisiny gk jauh dari kamu, kamu gk bisa kah jaga perasaan aku? itu seriusan tmn ap tmn? gk pd punya batasan kah?
      1/6, 09.00 arbans. Put, aku mau jujur sama kamu tentang hubungan kita, dan apa yang aku rasain selama ini. aku mau terbuka untuk kesekian kaliny

      INI INTINY
      Aku jujur seneng bisa sama kamu, aku bahagia bisa bersama kamu dan bisa jalan sama kamu.  aku sayanggg bgt sama kamu 
      Tapi... makin kesini, aku ngerasa gak dihargai. Awalnya aku masih bisa maklumin, cuman makin kesini aku bener-bener capek gak dihargai. Aku ngerasa disepelein, ngerasa perasaan aku gak dijaga, dan kepercayaan aku ke kamu lama-lama memudar. Aku capek harus selalu ngalah dan maklumin kamu terus-terusan, sementara kamu gak ada rasa bersalahnya?!?
      Makin ke sini hubungan ini makin gak sehat buat aku. Aku capek, energi aku habis cuma buat overthinking sendirian, nebak-nebak apa yang kamu sembunyiin karena sikap kamu yang tertutup. 
      kamu sadar gk?
      Ego dan gengsi kamu tuh tinggi banget.
      sikap kamu tuh berubah ubah, aku udh coba ngikutin dan maklumin tapi rasany tuh makin gk bisaa
      Put, dan itu semua bener-bener bikin aku capek dan sakit hati sendirian disini di posisi aku
      Aku mau kamu baca semuanya, dan adakah solusi terbaik untuk hubungan yg udh mulai gk sehat ini? Aku serahin semua ke kamu
      It's up to you. aku harap kamu ngerti apa yg aku rasain, aku tunggu jawaban dari kamu dan pikirkan secara matang gausah buru buru`,
      7: "First date yeyyyyy, dan malamnya gw masih bete, cemburu karena dia keluar masih gk pake hijab, aishhhhh",
      9: "gw bete karena soal kerudung lagi, tpi gw minta maaf ke dia terus yaaa, karena gw tau itu berlebihan jadi ya hm, gw mulai menerimanya jadi gitu dah huft",
      10: "gw minta dia ceritain semua masa SMP, dan yap gw sakit hati ama ceritanya",
      12: "gw minta dia ceritain semua masa SMA, dan yap gw sakit hati ama ceritanya sakit banget banget, asli sakit banget, dan gk disangka2 jadi luka besar wkwk,",
      14: `[12/6, 22.00] arbans: kok orang lain pernah dapet perhatian kayak gitu, sedangkan gw malah harus pelan-pelan banget.
          [12/6, 22.00] arbans: Kenapa orang yang gak tau diri bisa dapet kebaikan sebesar itu, sedangkan gw yang pacarnya malah masih berjuang ngerasa spesial?"
          [12/6, 23.19] arbans: Kenapa orang-orang sebelum gw bisa dapet sisi-sisi Putri dengan gampang, sedangkan gw yang pacarnya masih pelan banget?"
          [12/6, 23.19] arbans: Kenapa orang lain dulu bisa dapet perhatian dia dengan mudah, sedangkan gw yang sekarang jadi pacarnya malah masih berusaha keras buat ngerasa spesial?
          [12/6, 23.19] arbans: kok orang lain pernah dapet perhatian kayak gitu, sedangkan gw malah harus pelan-pelan banget.
          [12/6, 23.19] arbans: cuma pengen:
          jadi orang yang paling dipercaya;
          jadi orang yang dapet sisi dirinya yang gak orang lain dapet;
          jadi orang yang dia pilih dengan sadar, bukan karena kasihan atau kebiasaan;
          ngerasa "gw spesial buat dia".
          [12/6, 23.19] arbans: apa gw bisa nerima dia yg sebenarnya/diri asliny
          [12/6, 23.20] arbans: dan memaklumi masa lalunya, kaya gw ke diri sendiri
          [12/6, 23.30] arbans: gw cuma pengen jadi orang yang paling dipercaya, paling spesial, dan dapet sisi dirinya yang gak semua orang dapet, dan gw juga lagi belajar menerima dia yang sebenarnya, serta memaklumi masa lalunya seperti aku memaklumi diriku sendiri
          [14/6, 07.46] arbans: kepengen...
          jadi orang yang paling spesial buat dia
            Bukan sekadar "pacar"
            Tapi:
            orang yang paling dipercaya;
            orang yang paling dikenal;
            orang yang dapet sisi dirinya yang gak semua orang dapet;
            orang yang dipilih dengan sadar.
            gak iri sama cwo yg pernah dketin dia 
            iri sama kenyataan bahwa:
            "Kenapa orang lain dulu bisa dapet perhatian segampang dan kebaikan sebesar itu?"
            kenapa ama pacar sendiri dia pelan pelan bgtt, tapi ama org lain gampang bgt`,
      17: `[17/6, 20.51] arbans: sayanggku, aku msih berjuang nerima masa lalu kamu, jdi tolong bgt jan marah klo ak masih kepikiran, ya aku tau aku yg minta ceritain semuany
          trus aku btuh diyakinin klo kmu emg memilih aku, dan kmu gk akan kembali seperti dlu, bukan karena ak gk percaya sm kmu, tpi krn aku masih punya rasa takut untuk itu
          ak gk minta kmu ngpus masa lalu kamu karna aku tau itu gk mungkin
          [17/6, 20.51] arbans: 1 hal lgi yg aku pgnn, jangan cm nyuruh buat lupain semuany, ak pgn ditemenin sm kmu buat nerima semuany, aku capek klo sendiri
          dan aku butuh pengertian dan kesabaran kmu, krn buat ak nerima semuany itu gk bisa langsung sekali jdi`,
      24: "Seneng banget, akhirny gw punya foto foto dia di hp gw dan resmi hehehe dan teleponan pertama kali",
      28: `[28/6, 23.33] arbans: [28/6, 22.57] arbans: Aku capek, sayang.
            Aku pengen jujur sama apa yang aku rasain. Sampai sekarang aku belum sepenuhnya bisa nerima masa lalu kamu. Yang paling bikin aku susah itu bukan karena kamu punya masa lalu, tapi karena aku masih sering keinget gimana dulu kamu deket dan friendly sama beberapa cowok saat kita sama-sama udah saling suka.
            aku sendiri waktu itu berusaha jaga batasan. Aku gak mau deket sama cewek lain karena perasaanku cuma ke kamu. Makanya waktu aku tahu hal-hal itu, rasanya masih sakit sampai sekarang.
            aku juga baru sadar, yang bikin aku tambah kepikiran adalah dulu kamu gak pernah cerita soal cowok-cowok itu ke aku waktu kita masih PDKT. Jadi sekarang, setiap kita lagi bahagia, kadang tiba-tiba ingatan itu muncul lagi dan bikin aku susah percaya sepenuhnya.
            aku bukan ngomong ini buat nyalahin kamu atau ngungkit terus. Aku cuma pengen kamu ngerti kenapa kadang aku masih overthinking dan kenapa aku kelihatan susah percaya. Aku capek sama pikiranku sendiri, dan aku juga capek terus kebawa sama kejadian yang udah lewat.
            aku harap kamu bisa ngerti apa yang aku rasain
            [28/6, 22.58] arbans: aku bener bener capekkk, rasany aku lebih suka diri aku yg lama saat gk deketin siapa² karna tenang
            [28/6, 23.00] arbans: akuuu gtau lgii, apalgiii klo misalny nanti kita sama saling cek hp(ig,wa,tiktok,fb) mungkin ada sesuatu yg bikin aku sakit lgi
            [28/6, 23.00] arbans: aku butuh waktu sendiri lgi aku dh capek dah mls dah gk tau mau ntah lah
            [29/6, 10.01] arbans: yaaa, aku gk masalah kalo ngobrol bercanda doang, tapi kmu blg "....atau dkt..."  hm, oh kalo kek gitu berarti aku blh deket ama cewe² temen aku dong?
            menurut aku klo "dkt" bisa bikin salah paham cowo², jadiny tuh mereka ngerasa kamu kasih peluang/harapan ke mereka.
            contohny aja tuh si chelo, dia masih berani kan deketin kamu sampe waktu itu(bakar²) padahal dia dah tau kamu pacarny aku
            coba bedain deket sama cowo dengan temenan ama cowo
            aku tau pemikiran cowo² kek gmn
            [29/6, 10.04] arbans: aku merasa aku sudah menjaga hubungan ini sejak sebelum kita pacaran, tapi dari sudut pandangku kamu belum menjaga dengan cara yang sama dan sampai sekarang aku masih kesulitan berdamai dengan perbedaan itu
            aku kehilangan rasa percaya, rasa aman, dan dipikir pikir saat kita PDKT, usaha kita dari awal gk seimbang jg, dan aku takut kamu gk berubah, dan kejadian yg kyk di SMA kmu terulang lgi
            1 lgi kehadiran kamu masih bikin aku bahagia`,
    },
    7: {
      3: `-Bulan ini banyak mimpi buruk dan Sering nangis
      aku mimpi yg egk egk tuh tadi malam, mimpi kamu msih sembunyiin sesuatu di belakang aku, trus aku nemu hal yg di sembunyiin dan bikin aku sakit, trus aku minta putus karna aku udh gk kuat punya pacar kek gitu, dan juga akh masih gk bisa nerima masa lalu kamu, udh capekkk.
      aku mimpi ini tadi pagi gara gara ketiduran pusing pala aku
      aku mimpi kamu ngasih liat galeri kamu pas kita ketemuan kan, isiny foto/video pas kamu SMA banyak ketawany ceriany, trus aku blg ke kamu "wiii, kmu keliatan ceria banget yaa, bagus deh masa SMA kamu ceria, seru, banyak ketawany" 
      trus dalam hati pas aku ngomong "andai aku 1 sklh sama kmu, aku pen banget ada jadi bagian cerita SMA kmu" 
      terus pas pulang, gk lama aku wa kamu tuh "sayang aku pen ngomong sebagai aku yg belum pacarann ama kamu"
      "andai aku 1 sklh sama kmu, aku pen banget ada jadi bagian cerita SMA kmu, kamu ceria bgt soalny, aku pengen ada di saat kamu seperti itu, dan aku iri bgt sama temen temen sma kamu yg bisa liat kamu kek gitu"
      gk lama aku kebangun dari mimpi
      aku bangun dari tidur dan ngomong "sebegituny banget yaa gw pen jadi bagian dari cerita SMA dia, coba aj dlu 1 sklh"`,
      4: `-Bulan ini banyak mimpi buruk dan Sering nangis
      First time sleepcall, seneng banget gw, gw kira gk bakal pernah sleepcall AKKASKAK`,
      9: `-Bulan ini banyak mimpi buruk dan Sering nangis
      aku mau ngomong sesuatu...
      sebelumnya terimakasih yaa udh ngewujudin salah satu keinginan aku, yaitu aku bisa pacaran sama kamu. ini emg keinginan aku dari SMP. makasih udh selalu ada buat aku, selalu perhatian, berusaha selalu ngertiin aku. makasih juga udh hadir dan jadi bagian dari hidup aku.
      tapi untuk sekarang...
      kita masing² aja yaa. kita sama² perbaiki diri sendiri.
      aku udh gk mampu jalanin hubungan ini lagi. aku ngerasa hubungan ini belakangan udh mulai gk sehat buat aku. perbedaan cara mikir/prinsip dasar kita juga bener² beda, rasanya ada gap yg besar di antara kita berdua.
      aku juga udh bener² kehilangan kepercayaan ke kamu. susah banget buat ngebangun itu lagi. setiap aku nyoba percaya lagi, hal² yg dulu nyakitin aku selalu muncul lagi di pikiran aku. aku udh berusaha, tapi aku ngerasa aku gk sanggup lagi.
      aku minta maaf untuk semuanya. maaf kalau selama ini aku terlalu banyak ngelarang, terlalu banyak nuntut kamu buat jadi begini begitu, dan maaf kalau aku bikin kamu capek sama overthinking.
      terimakasih yaa buat semua kenangan yg udh kita lewatin.
      kalau suatu saat nanti kamu masih mau temenan sama aku, aku gapapa. tapi kalau kamu gk mau juga, aku bakal ngerti dan aku hargai keputusan kamu.
      sekali lagi, makasih yaa, dan maaf. TAPI INI GK JADI YAA EYY`,
      4: `-Bulan ini banyak mimpi buruk dan Sering nangis
      [10/7, 12.51] arbans: aku pengen jujur sama kmu soal 1 hal yg paling berat buat aku, sebenarnya yang paling bikin aku capek bukan krn aku gk peduli lgi sama kmu atau udh gk sayang sama kmu, yang paling berat itu bangun kepercayaan aku ke kamu
      jujur ya, mungkin ini terdengar lebay, tapi kepercayaan aku udh bener² hancur,  aku udh berusaha buat ngebangun lgi, aku juga berkali² nyoba buat percaya lgi sma kamu
      tapi setiap kali aku ngebangun kepercayaan itu, hal² yg nyakitin aku selalu muncul lgi dipikiran, aku dh berusaha lawan pikiran itu tpi rasany gk bisa, dn kepercayaan aku selalu hancur lagi
      [10/7, 12.59] arbans: aku gk bermaksud nyalahin kamu kok, aku cuma ngasih tauu
      
      dan yaa kita beradu argumen dan membuat komitmen`,
      11: `-Bulan ini banyak mimpi buruk dan Sering nangis
      Ulang tahun di ucapkan PUPUT(PACAR) dan hari yang sedih, karena nangis terus hehe
      [11/7, 00.47] <3girlfiee🤍: happy birthday sayangg 🥳🎊❤️ ciee 18 thn nichh, udh makin dewasa aja ya hehe 
      semoga di umur yg baru ini kamu selalu diberikan kesehatan, umur yg panjang, rezeki yg lancar, dan segala urusan kamu dimudahkan. semoga kamu selalu jdi anak yg baik, tetep rendah hati, selalu sabar, dan bisa menjadi pribadi yg lebih baik lg. semoga apa yg kamu impikan bisa tercapai, semua cita-cita dan harapan kamu bisa satu persatu terwujud, smoga kamu dikelilingi orang' baikk. 
      makasih udh jdi orang yg special. jaga diri yaa, jgn terllu keras sm diri sendiri dan jgn pernah benci sm diri kamu sndiri. 
      enjoy your special day yaa, semoga kamu selalu bahagia ya💗💗
      [11/7, 00.48] arbans: makasih sayang, aamiin`,
      16: `-Bulan ini banyak mimpi buruk dan Sering nangis
      aku cm blg apa yg ada dipikiran aku
      dlu kamu lebih ceria, lebih bebas tertawany, masa smp-sma kamu bagus ceria seru, tapi saat udh lulus kamu harus merasa nyesal karena demi aku 
      aku ngerasa bersalah kalo kmu kek gitu, aku jg sadar inj bukan kesalahan kamu sepenuhnya, ini jg sebagian salahny aku yg ber ekspetasi tinggi ke kamu,
      jadiny skrg kamu harus minta maaf terus terusan dan menjadi org apa yg aku ekspektasi in, hm, dan dipikir² kamu seharusnya gk ketemu aku lgi, agar masa smp-sma kamu gk kamu sesalinK`,
      19: `-Bulan ini banyak mimpi buruk dan Sering nangis
      Yaa emosi gw meledak lagi ke dia karena masa lalu hadeh hufft gk bisa dipungkiri sakit bangettt hati gw jg`,
      22: `-Bulan ini banyak mimpi buruk dan Sering nangis
      [22/7, 06.29] arbans: bahkan sekarang gw rasa gk dpt perlakuan yang sama, 
      ketika gw follow temen cewe gw, gw ditanya² pdhl itu first acc
      gw gk pernah nanya² tentang siapa tmn cowo² yg dia follow
      dia secara gk langsung gk ngizinin gw buat follow sec² tmn cewe² atau sebaliknya, tapi dia sendiri bebas follow temen cowo²  pake sec acc dia atau sebalikny
      menyedihkan sekali yaa wkwk -Ridho
      [22/7, 12.45] arbans: hal yg diluar kendali gw
      - masa lalu dia
      - siapa yang pernah dia ajak bercanda
      - siapa yang pernah mendekati dia dlu
      - keputusan dia dimasa lalu
      - cara dia merespon orang lain(cowo/cewe) saat berteman/didekati 
      - seberapa cepat dia berubah
      - siapa yg menyukainy 
      - cara orang lain memperlakukanny
      - cara dia berpakaian 
      - cara dia menggunakan uangny
      - *WAKTU 3 TAHUN YANG SUDAH LEWAT* (notes: sialan wkwkw)
      menyedihkan sekali yaa wkwk -Ridho
      [22/7, 17.44] arbans: dia yang gw sayang adalah org yg bikin gw tertawa, sedih, terluka, seneng.... tapi akhir akhir  luka gw begitu besar dan terkadang....
      ketika gw ngeliat foto dia, gw ngerasa bersalah, karena orang seperti dia harus bersama gw yang terus²an terluka karna masa laluny....
      tapi jg gk bisa dipungkiri rasa sakit, kecewa, penyesalan, kehilangan kepercayaan, kehilangan waktu itu bener² terasa bagi gw
      menyedihkan sekali yaa wkwk -Ridho
      [22/7, 17.55] arbans: mungkin ini masih setengah isi hati gw
      [22/7, 18.03] arbans: sekarang gw tambah sensi kalo ngomongin SMP-SMA/K
      [22/7, 21.24] arbans: ketika tertawa dengan dia,        memang gk slh kalo dia banyak yg deketin, udh cantik, senyumny manis, asik, lucu, jdi gk heran
      tpi sialny gw gk bisa ngeliat dia seperti itu di masa sekolah wkwk
      masa sekolah yg gk bisa diulang, dan yg selalu gw tangisin karna kenyataanny seperti itu
      bego bgt sih gw, gw benr² kehilangan waktu dan kesempatan itu
      menyedihkan sekali yaa wkwk -Ridho`,
      23: `-Bulan ini banyak mimpi buruk dan Sering nangis
      [23/7, 19.29] arbans: hari ini gw bertanya tanya, apakah putri bisa merasa kesepian dan mengetahui rasanya sendirian, mungkin jawabannya tidak berdaasarkan apa yg gw liat dia adalah orang yang selalu di kelilingi teman2 nya, dan keluarga dia, orang seperti dia mungkin tidak terlalu tau rasa karena sejak dlu seperti yg gw ketahui dari SD-SMP-SMA, dia selalu di kelilingi orang2 maupun itu yg bermaksud berteman, mendekati, menjadi pacarnya, DEKEL-KAKEL
      sedangkan gw sendiri.... gw bener2 gk punya tmn tetap, even skrg ada rasanya masih sama seperti emg selalu sendirian menhadapi semuanya....
      gw bisa hadir ketika orang lain butuh, tapi ketika gw butuh seseorang, hampir tidak ada 1 pun dari mereka yang bisa hadir
      APA MEREKA SEBENARNY ADA TAPI GK PERNAH GW ANGGEP ADA?
      APA GW TERLALU TAKUT AKAN RESPON MEREKA
      *APA SEMUA INI KARENA GW TERLALU MEMBATASI DIRI SENDIRI DAN MENGHUKUM DIRI SENDIRI*
      [23/7, 19.33] arbans: OH YA 1 HAL LAGI
      sepertinya emg gw gk bakal jadi bagian hidup dari seseorang dalam jangka panjang(PACARAN)
      [23/7, 19.36] arbans: dan... gw gk bakal dpt versi putri yang gw inginkan yaitu saat masa sekolah, gw jg gk bakal dpt sisi ny yang gk pernah di liat orang lain,  karena suatu hal yang gw telat mengetahuiny, dan mungkin putri adalh orang yng dpt versi terbaik dan terburukny gw pada saat bersamaan
      [23/7, 19.37] arbans: gw takut sendirian dtinggal tapi pada saat bersamaan gw jg mau sendirian
      [23/7, 19.40] arbans: rasanya gw emg ditakdirkan untuk membiasakn diri dengan rasa kesepian (sendirian) karena pd akhriny bisa saja gw yang di tinggal terahkir oleh orang2 yg gw sayang
      [23/7, 19.42] arbans: tapi apakah itu semuanya benar?
      [23/7, 19.56] arbans: tapi itulah yg gw rasa dan semuany rasanya benar`,
      24: `-Bulan ini banyak mimpi buruk dan Sering nangis
      luka gw kebuka lagi, kegores lagi, keinget lagi`,
      26: `-Bulan ini banyak mimpi buruk dan Sering nangis
      seneneg banget akhirny my pacar kerumah gw
      malamnya luka gw kebuka lagi, kegores lagi, keinget lagi`,
      28: `-Bulan ini banyak mimpi buruk dan Sering nangis
      luka gw kebuka lagi, kegores lagi, keinget lagi`,
      29: `-Bulan ini banyak mimpi buruk dan Sering nangis
      luka gw kebuka lagi, kegores lagi, keinget lagi`,
    },
  },
};

// Nama Bulan
const monthNames = {
  1: "Januari",
  2: "Februari",
  3: "Maret",
  4: "April",
  5: "Mei",
  6: "Juni",
  7: "Juli",
  8: "Agustus",
  9: "September",
  10: "Oktober",
  11: "November",
  12: "Desember",
};

// Navigasi Folder
let selectedYear = "";
let selectedMonth = "";

function openYear(year) {
  selectedYear = year;
  document.getElementById("view-years").style.display = "none";
  document.getElementById("view-months").style.display = "block";

  let monthsHtml = "";
  for (let month in diaryData[year]) {
    const name = monthNames[month] || `Bulan ${month}`;
    monthsHtml += `<button class="archive-btn" onclick="openMonth('${month}')">${name}</button>`;
  }
  document.getElementById("months-list").innerHTML = monthsHtml;
}

function openMonth(month) {
  selectedMonth = month;
  document.getElementById("view-months").style.display = "none";
  document.getElementById("view-days").style.display = "block";

  let daysHtml = "";
  for (let day in diaryData[selectedYear][month]) {
    daysHtml += `<button class="archive-btn" onclick="openDay('${day}')">Tgl ${day}</button>`;
  }
  document.getElementById("days-list").innerHTML = daysHtml;
}

function openDay(day) {
  document.getElementById("view-days").style.display = "none";
  document.getElementById("view-content").style.display = "block";

  const text = diaryData[selectedYear][selectedMonth][day];
  document.getElementById("raw-diary-text").innerText = text;
}

function backToYears() {
  document.getElementById("view-months").style.display = "none";
  document.getElementById("view-years").style.display = "block";
}

function backToMonths() {
  document.getElementById("view-days").style.display = "none";
  document.getElementById("view-months").style.display = "block";
}

function backToDays() {
  document.getElementById("view-content").style.display = "none";
  document.getElementById("view-days").style.display = "block";
}
