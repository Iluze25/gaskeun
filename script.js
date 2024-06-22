function meet() {

  window.open('https://meet.google.com/gtz-davw-qzg', "_blank")

}

function meetNowI() {

  let hello = document.getElementById('meetNow')

  hello.style.display = 'block';

}

const countdownDate = new Date(`June 27, 2024 20:00:00`).getTime();



// Memperbarui countdown setiap 1 detik

const countdown = setInterval(() => {

  // Dapatkan waktu saat ini

  const now = new Date().getTime();



  // Hitung selisih waktu antara sekarang dan waktu akhir countdown

  const distance = countdownDate - now;



  // Hitung hari, jam, menit, dan detik

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);



  // Tampilkan hasilnya dalam elemen dengan id 'countdown'

  const countdownElement = document.getElementById('countdown');

  countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;



  // Jika waktu sudah habis, hentikan countdown

  if (distance < 0) {

    clearInterval(countdown);

    meetNowI()

  }

}, 1000); // Perbarui setiap 1 detik (1000 milidetik)





const countdown1Date1 = new Date(`June 28, 2024 20:00:20`).getTime();



// Memperbarui countdown1 setiap 1 detik

const countdown1 = setInterval(() => {

  // Dapatkan waktu saat ini

  const now1 = new Date().getTime();



  // Hitung selisih waktu antara sekarang dan waktu akhir countdown1

  const distance1 = countdown1Date1 - now1;



  // Hitung hari, jam, menit, dan detik

  const days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));

  const hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance1 % (1000 * 60)) / 1000);



  // Tampilkan hasilnya dalam elemen dengan id 'countdown1'

  const countdown1Element1 = document.getElementById('loasd');

  countdown1Element1.innerHTML = `${days1} Hari ${hours1} Jam ${minutes1} Menit ${seconds} Detik`;



  // Jika waktu sudah habis, hentikan countdown1

  if (distance1 < 0) {

    clearInterval(countdown1);

    meetNowI();

  }

}, 1000); // Perbarui setiap 1 detik (1000 milidetik)





