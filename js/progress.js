// ==============================
// PROGRESS BELAJAR
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    updateProgress();

});

// ==============================
// Tandai Modul Selesai
// ==============================

function selesaiModul(modul){

    let progress = JSON.parse(localStorage.getItem("progressModul")) || [];

    if(!progress.includes(modul)){

        progress.push(modul);

        progress.sort((a,b)=>a-b);

        localStorage.setItem("progressModul", JSON.stringify(progress));

    }

    updateProgress();

}

// ==============================
// Update Progress
// ==============================

function updateProgress(){

    let progress = JSON.parse(localStorage.getItem("progressModul")) || [];

    let jumlah = progress.length;

    let persen = jumlah * 25;

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    // Progress Bar
    if(progressBar){

        progressBar.style.width = persen + "%";
        progressBar.innerHTML = persen + "%";

    }

    if(progressText){

        progressText.innerHTML = jumlah + " dari 4 Modul";

    }

    // ==============================
    // Card selesai materi
    // ==============================

    const selesaiCard = document.getElementById("materiSelesai");

    if(selesaiCard){

        if(jumlah === 4){

            selesaiCard.style.display = "block";

        }else{

            selesaiCard.style.display = "none";

        }

    }

    // ==============================
    // Checklist + Tombol
    // ==============================

    for(let i=1;i<=4;i++){

        const item = document.getElementById("check"+i);

        if(!item) continue;

        const status = item.querySelector(".status");
        const tombol = document.getElementById("btnModul"+i);

        if(progress.includes(i)){

            // Checklist
            status.innerHTML = "✅";
            item.classList.add("done");

            // Tombol
            if(tombol){

                tombol.disabled = true;

                tombol.classList.remove("btn-success");

                tombol.classList.add("btn-secondary");

                tombol.innerHTML = "✅ Sudah Dipelajari";

            }

        }else{

            // Checklist
            status.innerHTML = "⚪";
            item.classList.remove("done");

            // Tombol
            if(tombol){

                tombol.disabled = false;

                tombol.classList.remove("btn-secondary");

                tombol.classList.add("btn-success");

                tombol.innerHTML = `✅ Tandai Modul ${i} Selesai`;

            }

        }

    }

}

// ==============================
// Reset Progress
// ==============================

function resetProgress(){

    localStorage.removeItem("progressModul");

    updateProgress();

}