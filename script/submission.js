 document.addEventListener('DOMContentLoaded', function() {
            loadSubmissionData();
        });

        function loadSubmissionData() {
            const surveyData = JSON.parse(localStorage.getItem('surveyData') || '[]');
            
            if (surveyData.length === 0) {
                document.getElementById('noDataMessage').style.display = 'block';
                document.querySelector('.table-container').style.display = 'none';
                document.getElementById('statsText').textContent = 'Menampilkan 0 Data';
                return;
            }
            
            updateStats(surveyData.length);
            displayResults(surveyData);
        }

        function updateStats(count) {
            document.getElementById('statsText').textContent = `Menampilkan ${count} Data`;
        }

        function displayResults(data) {
            const tableBody = document.getElementById('resultsTableBody');
            tableBody.innerHTML = '';

            data.forEach((item, index) => {
                const row = document.createElement('tr');
                
                const jenisRokok = item.jenisRokok && item.jenisRokok.length > 0 
                    ? item.jenisRokok.join(',') 
                    : 'Tidak ada';

                row.innerHTML = `
                    <td class="entry-number">${index + 1}</td>
                    <td>${item.nama || '-'}</td>
                    <td>${item.umur || '-'}</td>
                    <td>${item.jenisKelamin || '-'}</td>
                    <td>${item.perokok || '-'}</td>
                    <td class="cigarette-types">${jenisRokok}</td>
                `;
                
                tableBody.appendChild(row);
            });
        }