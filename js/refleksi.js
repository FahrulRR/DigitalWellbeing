// ==============================
// AKTIVITAS 3 - REFLEKSI DIRI
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const tombol = document.getElementById("cekRefleksi");

    if (!tombol) return;

    tombol.addEventListener("click", tampilkanRefleksi);

});

function tampilkanRefleksi() {

    const r1 = document.querySelector('input[name="r1"]:checked');
    const r2 = document.querySelector('input[name="r2"]:checked');
    const r3 = document.querySelector('input[name="r3"]:checked');

    if (!r1 || !r2 || !r3) {

        alert("Silakan jawab seluruh pertanyaan terlebih dahulu.");

        return;

    }

    let skor = 0;

    skor += parseInt(r1.value);
    skor += parseInt(r2.value);
    skor += parseInt(r3.value);

    let judul = "";
    let pesan = "";
    let rekomendasi = [];

    // ==========================
    // HASIL REFLEKSI
    // ==========================

    if (skor <= 4) {

        judul = "😊 Kebiasaan Digitalmu Sangat Baik";

        pesan = "Selamat! Kamu sudah menerapkan Digital Wellbeing dengan baik. Pertahankan kebiasaan positif ini.";

        rekomendasi = [
            "Pertahankan penggunaan Screen Time.",
            "Tetap gunakan Focus Mode saat belajar.",
            "Istirahatkan mata setiap 20–30 menit.",
            "Gunakan media sosial secara bijak."
        ];

    }

    else if (skor <= 7) {

        judul = "🙂 Kebiasaan Digitalmu Cukup Baik";

        pesan = "Penggunaan teknologimu sudah cukup baik, tetapi masih ada beberapa hal yang bisa ditingkatkan.";

        rekomendasi = [
            "Kurangi waktu bermain HP.",
            "Aktifkan Focus Mode lebih sering.",
            "Batasi penggunaan media sosial sebelum tidur.",
            "Luangkan waktu untuk aktivitas di luar layar."
        ];

    }

    else {

        judul = "⚠️ Perlu Meningkatkan Digital Wellbeing";

        pesan = "Penggunaan perangkatmu masih cukup tinggi. Cobalah mulai mengatur kebiasaan digital agar lebih sehat.";

        rekomendasi = [
            "Kurangi Screen Time setiap hari.",
            "Hindari bermain HP sebelum tidur.",
            "Gunakan fitur Digital Wellbeing.",
            "Perbanyak aktivitas fisik dan interaksi langsung."
        ];

    }

    let list = "";

    rekomendasi.forEach(function(item){

        list += `<li>${item}</li>`;

    });

    const hasil = document.getElementById("hasilRefleksi");

    hasil.style.display = "block";

    hasil.innerHTML = `

<div class="reflection-card">

    <h2 class="text-center mb-4">
        📊 Hasil Aktivitas
    </h2>

    <h3 class="text-center text-success mb-3">
        ${judul}
    </h3>

    <p class="text-center">
        ${pesan}
    </p>

    <hr>

    <h5 class="mb-3">📚 Aktivitas yang Telah Diselesaikan</h5>

    <div class="list-group mb-4">

        <div class="list-group-item">
            ✅ Flashcard Digital Wellbeing
        </div>

        <div class="list-group-item">
            ✅ Benar atau Salah
        </div>

        <div class="list-group-item">
            ✅ Refleksi Diri
        </div>

    </div>

    <h5>💡 Rekomendasi</h5>

    <ul class="mb-4">
        ${list}
    </ul>

    <hr>

    <div class="text-center">

        <div style="font-size:60px;">🎉</div>

        <h3 class="text-success mt-2">
            Selamat!
        </h3>

        <p>

            Kamu telah menyelesaikan seluruh aktivitas pembelajaran
            <b>Digital Wellbeing</b>.

            <br><br>

            Sekarang saatnya mengerjakan evaluasi untuk mengetahui
            sejauh mana pemahamanmu terhadap seluruh materi.

        </p>

    </div>

    <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">

        <a href="evaluasi.html"
           class="btn btn-success btn-lg">

            📝 Lanjut ke Evaluasi

        </a>

        <button
            class="btn btn-outline-primary btn-lg"
            id="ulangRefleksi">

            🔄 Isi Ulang

        </button>

    </div>

</div>

`;

    document.getElementById("ulangRefleksi").addEventListener("click", resetRefleksi);

    hasil.scrollIntoView({

        behavior: "smooth"

    });

}

// ==============================
// RESET
// ==============================

function resetRefleksi() {

    document.querySelectorAll('input[name="r1"]').forEach(item => item.checked = false);
    document.querySelectorAll('input[name="r2"]').forEach(item => item.checked = false);
    document.querySelectorAll('input[name="r3"]').forEach(item => item.checked = false);

    const hasil = document.getElementById("hasilRefleksi");

    hasil.style.display = "none";

    hasil.innerHTML = "";

}