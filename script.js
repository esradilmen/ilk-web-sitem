const buton = document.getElementById('mesajButonu');

buton.addEventListener('click', () => {
    alert('Web geliştirme yolculuğuma hoş geldin!');
});

// Mevcut mesaj buton kodun
const mesajButonu = document.getElementById('mesajButonu');
if (mesajButonu) {
    mesajButonu.addEventListener('click', () => {
        alert('Web geliştirme yolculuğuma hoş geldin!');
    });
}

// Karanlık Mod Anahtarı
const themeToggleBtn = document.getElementById('themeToggle');

themeToggleBtn.addEventListener('click', () => {
    // Body elementine 'dark-mode' sınıfını ekler veya çıkarır
    document.body.classList.toggle('dark-mode');

    // Buton üzerindeki metni ve simgeyi duruma göre günceller
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Aydınlık Mod';
    } else {
        themeToggleBtn.textContent = '🌙 Karanlık Mod';
    }
});