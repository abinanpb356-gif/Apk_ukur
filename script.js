// Tab Navigation
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        showTab(tabName);
    });
});

function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
}

// Validation function
function validateInput(value, errorId, inputId) {
    const errorElement = document.getElementById(errorId);
    const inputElement = document.getElementById(inputId);
    
    if (!errorElement || !inputElement) {
        return false;
    }
    
    if (value === '' || value === null) {
        errorElement.textContent = '⚠️ Kolom ini harus diisi';
        inputElement.classList.add('error');
        return false;
    } else if (parseFloat(value) <= 0) {
        errorElement.textContent = '⚠️ Nilai harus lebih dari 0';
        inputElement.classList.add('error');
        return false;
    } else if (isNaN(parseFloat(value))) {
        errorElement.textContent = '⚠️ Hanya angka yang diperbolehkan';
        inputElement.classList.add('error');
        return false;
    } else {
        errorElement.textContent = '';
        inputElement.classList.remove('error');
        return true;
    }
}

// Clear error message when user types
document.addEventListener('input', function(e) {
    if (e.target.type === 'number') {
        if (e.target.value !== '' && parseFloat(e.target.value) > 0) {
            // Clear all error messages for this field
            const parentForm = e.target.closest('form');
            if (parentForm) {
                const errorMessages = parentForm.querySelectorAll('.error-message');
                errorMessages.forEach(elem => {
                    elem.textContent = '';
                });
            }
            e.target.classList.remove('error');
        }
    }
});

// PERSEGI PANJANG
function hitungPersegiPanjang(event) {
    event.preventDefault();

    const panjang = document.getElementById('panjang').value;
    const lebar = document.getElementById('lebar').value;

    // Validasi input
    const validPanjang = validateInput(panjang, 'error-panjang', 'panjang');
    const validLebar = validateInput(lebar, 'error-lebar', 'lebar');

    if (!validPanjang || !validLebar) {
        document.getElementById('hasilPersegiPanjang').style.display = 'none';
        return;
    }

    // Hitung luas
    const panjangNum = parseFloat(panjang);
    const lebarNum = parseFloat(lebar);
    const luas = panjangNum * lebarNum;

    // Tampilkan hasil
    document.getElementById('nilaiPersegiPanjang').textContent = luas.toFixed(2);
    document.getElementById('detailPanjang').textContent = panjangNum.toFixed(2);
    document.getElementById('detailLebar').textContent = lebarNum.toFixed(2);
    document.getElementById('hasilPersegiPanjang').style.display = 'block';
}

// SEGITIGA
function hitungSegitiga(event) {
    event.preventDefault();

    const alas = document.getElementById('alasSegitiga').value;
    const tinggi = document.getElementById('tinggiSegitiga').value;

    // Validasi input
    const validAlas = validateInput(alas, 'error-alas-segitiga', 'alasSegitiga');
    const validTinggi = validateInput(tinggi, 'error-tinggi-segitiga', 'tinggiSegitiga');

    if (!validAlas || !validTinggi) {
        document.getElementById('hasilSegitiga').style.display = 'none';
        return;
    }

    // Hitung luas
    const alasNum = parseFloat(alas);
    const tinggiNum = parseFloat(tinggi);
    const luas = 0.5 * alasNum * tinggiNum;

    // Tampilkan hasil
    document.getElementById('nilaiSegitiga').textContent = luas.toFixed(2);
    document.getElementById('detailAlasSegitiga').textContent = alasNum.toFixed(2);
    document.getElementById('detailTinggiSegitiga').textContent = tinggiNum.toFixed(2);
    document.getElementById('hasilSegitiga').style.display = 'block';
}

// TRAPESIUM
function hitungTrapesium(event) {
    event.preventDefault();

    const sisi1 = document.getElementById('sisiSejajar1').value;
    const sisi2 = document.getElementById('sisiSejajar2').value;
    const tinggi = document.getElementById('tinggiTrapesium').value;

    // Validasi input
    const validSisi1 = validateInput(sisi1, 'error-sisi1', 'sisiSejajar1');
    const validSisi2 = validateInput(sisi2, 'error-sisi2', 'sisiSejajar2');
    const validTinggi = validateInput(tinggi, 'error-tinggi-trapesium', 'tinggiTrapesium');

    if (!validSisi1 || !validSisi2 || !validTinggi) {
        document.getElementById('hasilTrapesium').style.display = 'none';
        return;
    }

    // Hitung luas
    const sisi1Num = parseFloat(sisi1);
    const sisi2Num = parseFloat(sisi2);
    const tinggiNum = parseFloat(tinggi);
    const luas = 0.5 * (sisi1Num + sisi2Num) * tinggiNum;

    // Tampilkan hasil
    document.getElementById('nilaiTrapesium').textContent = luas.toFixed(2);
    document.getElementById('detailSisi1').textContent = sisi1Num.toFixed(2);
    document.getElementById('detailSisi2').textContent = sisi2Num.toFixed(2);
    document.getElementById('detailTinggiTrapesium').textContent = tinggiNum.toFixed(2);
    document.getElementById('hasilTrapesium').style.display = 'block';
}
