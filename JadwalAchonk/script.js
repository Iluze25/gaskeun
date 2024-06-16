function meetWithAchonk() {
    window.open('https://meet.google.com/mgt-ohte-brb', '_blank');
}
function displayButton() {
    let element = document.getElementById('googleMeetIluzeXAchonk');
    element.style.display = 'block';
}

const countdownDate = new Date(`June 16, 2024 20:00:00`).getTime();

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
  countdownElement.innerHTML = `${hours} : ${minutes} : ${seconds}`;

  // Jika waktu sudah habis, hentikan countdown
  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "";
    displayButton()
  }
}, 1000); // Perbarui setiap 1 detik (1000 milidetik)
