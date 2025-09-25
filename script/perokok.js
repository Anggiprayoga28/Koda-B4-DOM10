document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    const clearForm = document.getElementById('clearForm');
    const viewResultsBtn = document.getElementById('viewResultsBtn');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const surveyData = {
            id: Date.now(), 
            timestamp: new Date().toLocaleString('id-ID', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }),
            nama: formData.get('nama').trim(),
            umur: parseInt(formData.get('umur')),
            jenisKelamin: formData.get('jenisKelamin'),
            perokok: formData.get('perokok'),
            jenisRokok: formData.getAll('jenisRokok')
        };

        let existingData = JSON.parse(localStorage.getItem('surveyData') || '[]');
        
        existingData.push(surveyData);
        
        localStorage.setItem('surveyData', JSON.stringify(existingData));
        
        window.location.href = 'pages/submission.html';
    });

    clearForm.addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Apakah Anda yakin ingin mengosongkan formulir?')) {
            form.reset();
            const jenisRokokSection = document.getElementById('jenisRokokSection');
            jenisRokokSection.style.opacity = '1';
            jenisRokokSection.style.pointerEvents = 'auto';
        }
    });

    const perokokRadios = document.querySelectorAll('input[name="perokok"]');
    const jenisRokokSection = document.getElementById('jenisRokokSection');
    
    perokokRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'Tidak') {
                jenisRokokSection.style.opacity = '0.5';
                jenisRokokSection.style.pointerEvents = 'none';
                const checkboxes = document.querySelectorAll('input[name="jenisRokok"]');
                checkboxes.forEach(checkbox => checkbox.checked = false);
            } else {
                jenisRokokSection.style.opacity = '1';
                jenisRokokSection.style.pointerEvents = 'auto';
            }
        });
    });

    const nameInput = document.getElementById('nama');
    const ageInput = document.getElementById('umur');

    nameInput.addEventListener('input', function() {
        const value = this.value.replace(/[^a-zA-Z\s]/g, '');
        if (this.value !== value) {
            this.value = value;
        }
    });

    ageInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value < 1 || value > 150) {
            this.setCustomValidity('Umur harus antara 1-150 tahun');
        } else {
            this.setCustomValidity('');
        }
    });
});