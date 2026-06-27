// =========================
// MODUL 3 - CHECKLIST
// =========================

const checks = document.querySelectorAll(".habit-check");
const progress = document.getElementById("habitProgress");
const text = document.getElementById("habitText");
const message = document.getElementById("habitMessage");
const complete = document.getElementById("completeCard");

if (checks.length > 0) {

    checks.forEach(check => {
        check.addEventListener("change", updateHabit);
    });

    updateHabit();

}

function updateHabit() {

    const total = checks.length;
    let checked = 0;

    checks.forEach(item => {
        if (item.checked) checked++;
    });

    const percent = Math.round((checked / total) * 100);

    // Progress Bar
    progress.style.width = percent + "%";
    progress.innerHTML = percent + "%";

    // Text Progress
    text.innerHTML = checked + " dari " + total + " kebiasaan dilakukan";

    // Pesan Progress
    // Pesan

if (checked == 0) {

    message.innerHTML = `
    <div class="alert alert-primary text-center">
        💡 Yuk mulai menerapkan kebiasaan Digital Wellbeing!
    </div>`;
}

else if (checked <= 2) {

    message.innerHTML = `
    <div class="alert alert-info text-center">
        👍 Awal yang bagus! Terus tingkatkan kebiasaanmu.
    </div>`;

}

else if (checked <= 4) {

    message.innerHTML = `
    <div class="alert alert-warning text-center">
        👏 Bagus! Kamu sudah berada di jalur yang benar.
    </div>`;

}

else if (checked == 5) {

    message.innerHTML = `
    <div class="alert alert-success text-center">
        🌟 Hampir selesai! Tinggal satu kebiasaan lagi.
    </div>`;

}

else {

    message.innerHTML = `
    <div class="alert alert-success text-center">

        <h5>🎉 Selamat!</h5>

        <p class="mb-2">
            Semua checklist berhasil diselesaikan.
        </p>

        <span class="badge bg-success">
            🏅 Digital Wellbeing Completed
        </span>

    </div>`;

}

}

function cekStudiKasus(){

const jawaban=document.querySelector('input[name="case"]:checked');

const hasil=document.getElementById("hasilKasus");

if(!jawaban){

hasil.innerHTML=`

<div class="alert alert-warning">

⚠️ Pilih salah satu jawaban terlebih dahulu.

</div>

`;

return;

}

if(jawaban.value=="1"){

hasil.innerHTML=`

<div class="alert alert-success">

<h4>✅ Jawaban Benar</h4>

<p>

Mengatur Screen Time, menggunakan Focus Mode,
serta mengurangi distraksi merupakan penerapan
Digital Wellbeing yang tepat.

</p>

<hr>

<h5>💡 Insight</h5>

<p>

Digital Wellbeing bukan berarti berhenti menggunakan teknologi,
tetapi menggunakan teknologi secara sadar,
seimbang, sehat, dan bertanggung jawab.

</p>

</div>

`;

}else{

hasil.innerHTML=`

<div class="alert alert-danger">

<h4>❌ Jawaban Kurang Tepat</h4>

<p>

Jawaban tersebut belum sesuai dengan prinsip
Digital Wellbeing.

</p>

<hr>

<h5>📚 Pelajari Kembali</h5>

<p>

Coba baca kembali Modul 2 mengenai dampak penggunaan teknologi
dan Modul 3 mengenai kebiasaan digital sehat.

</p>

</div>

`;

}

}