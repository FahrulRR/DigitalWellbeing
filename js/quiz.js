// ==============================
// AKTIVITAS 2 - TRUE / FALSE
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const tombol = document.getElementById("cekQuiz");

    if (!tombol) return;

    tombol.addEventListener("click", cekQuiz);

});

function cekQuiz() {

    const kunci = [
        "benar",
        "benar",
        "salah",
        "benar",
        "salah"
    ];

    const penjelasan = [

        "Menggunakan HP sebelum tidur dapat mengganggu kualitas tidur karena cahaya biru dari layar dapat menghambat produksi hormon melatonin.",

        "Focus Mode membantu mengurangi gangguan notifikasi sehingga pengguna lebih fokus ketika belajar.",

        "Password yang sama pada semua akun sangat berisiko. Sebaiknya gunakan password yang berbeda untuk setiap akun.",

        "Screen Time membantu pengguna memantau lama penggunaan perangkat agar penggunaan teknologi lebih terkontrol.",

        "Informasi harus dicek terlebih dahulu melalui sumber terpercaya sebelum dibagikan."

    ];

    let skor = 0;

    let hasilHTML = "";

    for(let i=1;i<=5;i++){

        const jawaban = document.querySelector(`input[name="q${i}"]:checked`);

        if(jawaban == null){

            alert("Silakan jawab semua soal terlebih dahulu.");

            return;

        }

        if(jawaban.value == kunci[i-1]){

            skor++;

            hasilHTML += `

            <div class="alert alert-success">

                <h5>✅ Soal ${i}</h5>

                Jawabanmu benar.

            </div>

            `;

        }

        else{

            hasilHTML += `

            <div class="alert alert-danger">

                <h5>❌ Soal ${i}</h5>

                <p>

                Jawabanmu kurang tepat.

                </p>

                <p>

                <b>Jawaban yang benar :</b>

                ${kunci[i-1].charAt(0).toUpperCase()+kunci[i-1].slice(1)}

                </p>

                <p>

                <b>Penjelasan :</b><br>

                ${penjelasan[i-1]}

                </p>

            </div>

            `;

        }

    }

    let pesan = "";

    if(skor==5){

        pesan="🏆 Luar biasa! Semua jawaban benar.";

    }

    else if(skor>=4){

        pesan="👏 Sangat baik! Tinggal sedikit lagi.";

    }

    else if(skor>=3){

        pesan="🙂 Cukup baik. Pelajari kembali materi yang masih salah.";

    }

    else{

        pesan="📚 Yuk baca kembali materi Digital Wellbeing.";

    }

    const hasil = document.getElementById("hasilQuiz");

    hasil.style.display = "block";

    hasil.innerHTML = `

    <div class="result-card">

        <h2 class="text-center">

            🎉 Hasil Aktivitas

        </h2>

        <h1 class="text-center my-3">

            ${skor} / 5

        </h1>

        <p class="text-center">

            ${pesan}

        </p>

        <hr>

        ${hasilHTML}

        <div class="text-center mt-4">

            <button
            class="btn btn-success"
            id="ulangQuiz">

            🔄 Kerjakan Ulang

            </button>

        </div>

    </div>

    `;

    document.getElementById("ulangQuiz").addEventListener("click", ulangQuiz);

    hasil.scrollIntoView({

        behavior:"smooth"

    });

}

function ulangQuiz(){

    document.querySelectorAll(".tf-answer").forEach(function(item){

        item.checked=false;

    });

    document.getElementById("hasilQuiz").style.display="none";

    document.getElementById("hasilQuiz").innerHTML="";

}