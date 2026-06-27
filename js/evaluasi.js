// ==============================
// EVALUASI DIGITAL WELLBEING
// ==============================

function cekEvaluasi(){

    const kunci = [

        "b",
        "c",
        "b",
        "b",
        "c",
        "b",
        "b",
        "b",
        "b",
        "b"

    ];

    const pembahasan = [

"Digital Wellbeing bertujuan menggunakan teknologi secara sehat, seimbang, aman, dan bertanggung jawab.",

"Penggunaan gadget yang berlebihan dapat mengurangi konsentrasi belajar serta mengganggu kualitas tidur.",

"Focus Mode membantu mengurangi gangguan notifikasi sehingga pengguna dapat lebih fokus saat belajar.",

"Screen Time berfungsi memantau dan mengatur durasi penggunaan perangkat.",

"Password yang kuat membantu melindungi akun dari akses yang tidak sah.",

"Mengaktifkan Focus Mode saat belajar merupakan salah satu contoh penerapan Digital Wellbeing.",

"Selalu periksa kebenaran informasi sebelum membagikannya agar terhindar dari penyebaran hoaks.",

"Mematikan notifikasi saat belajar merupakan contoh penerapan Digital Wellbeing.",

"Digital Wellbeing membantu menjaga keseimbangan antara aktivitas belajar dan penggunaan teknologi.",

"Digital Wellbeing berarti menggunakan teknologi secara bijak, sehat, aman, dan bertanggung jawab."

];

    let score = 0;

    let review = "";

    for(let i=1;i<=10;i++){

        const jawaban =
        document.querySelector('input[name="q'+i+'"]:checked');

        if(!jawaban){

            alert("Silakan jawab semua soal terlebih dahulu.");

            return;

        }

        if(jawaban.value == kunci[i-1]){

    score++;

}else{

    review += `

    <div class="alert alert-danger text-start mt-4">

        <h5>❌ Soal ${i}</h5>

        <p>

            <strong>Jawabanmu :</strong>
            ${jawaban.value.toUpperCase()}

        </p>

        <p>

            <strong>Jawaban Benar :</strong>
            ${kunci[i-1].toUpperCase()}

        </p>

        <hr>

        <p>

            <strong>Pembahasan :</strong><br>

            ${pembahasan[i-1]}

        </p>

    </div>

    `;

}

    }

const nilai = score * 10;

let kategori = "";
let pesan = "";

if(nilai >= 90){

    kategori = "🌟 Sangat Baik";

    pesan = "Luar biasa! Kamu telah memahami materi Digital Wellbeing dengan sangat baik.";

}
else if(nilai >= 80){

    kategori = "😊 Baik";

    pesan = "Kamu sudah memahami materi dengan baik. Tetap pertahankan kebiasaan digital yang sehat.";

}
else if(nilai >= 70){

    kategori = "🙂 Cukup";

    pesan = "Pemahamanmu sudah cukup baik, tetapi masih ada beberapa materi yang perlu dipelajari kembali.";

}
else{

    kategori = "📚 Perlu Belajar Lagi";

    pesan = "Jangan menyerah! Pelajari kembali materi dan coba kerjakan evaluasi sekali lagi.";

}

const hasil = document.getElementById("hasilEvaluasi");

hasil.innerHTML = `

<div class="reflection-card">

    <div class="text-center">

        <div style="font-size:60px;">
            🎉
        </div>

        <h2 class="mb-3">
            Hasil Evaluasi
        </h2>

        <h1 class="display-2 fw-bold text-primary">

            ${nilai}

        </h1>

        <p class="fs-4 mb-3">

            Nilai Kamu

        </p>

        <span class="badge bg-success fs-5 px-4 py-3 rounded-pill">

            ${kategori}

        </span>

        <p class="mt-4 text-muted">

            ${pesan}

        </p>

    </div>

    <hr class="my-5">

    <div class="row text-center">

        <div class="col-md-6 mb-3">

            <div class="p-4 rounded-4 bg-light">

                <h1 class="text-success">

                    ${score}

                </h1>

                <h5>

                    ✅ Jawaban Benar

                </h5>

            </div>

        </div>

        <div class="col-md-6 mb-3">

            <div class="p-4 rounded-4 bg-light">

                <h1 class="text-danger">

                    ${10-score}

                </h1>

                <h5>

                    ❌ Jawaban Salah

                </h5>

            </div>

        </div>

    </div>

    <hr class="my-5">

    <div class="text-center">

        <p class="lead">

            Terima kasih telah mengerjakan evaluasi Digital Wellbeing.

            Terus terapkan kebiasaan digital yang sehat dalam kehidupan sehari-hari.

        </p>

    </div>

    <hr class="my-5">

<h3 class="text-center mb-4">

📚 Review Jawaban

</h3>

${

score === 10

?

`

<div class="alert alert-success text-center">

<h4>🎉 Sempurna!</h4>

<p class="mb-0">

Semua jawabanmu benar. Pertahankan pemahamanmu tentang Digital Wellbeing.

</p>

</div>

`

:

review

}

    <div class="d-flex justify-content-center gap-3 flex-wrap mt-4">

        <button
            class="btn btn-outline-primary btn-lg"
            onclick="location.reload()">

            🔄 Kerjakan Ulang

        </button>

        <a
            href="../index.html"
            class="btn btn-success btn-lg">

            🏠 Kembali ke Home

        </a>

    </div>

</div>

`;

hasil.scrollIntoView({

    behavior:"smooth"

});

// ==============================
// Ubah tombol menjadi selesai
// ==============================

const tombol = document.getElementById("btnEvaluasi");

if(tombol){

    tombol.disabled = true;

    tombol.innerHTML = "✔ Evaluasi Selesai";

    tombol.classList.remove("btn-primary");

    tombol.classList.add("btn-success");

}

}