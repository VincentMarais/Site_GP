function loadCSV() {
    const fileInput = document.getElementById('upload-csv');
    const file = fileInput.files[0];

    if (file) {
        Papa.parse(file, {
            complete: function(results) {
                displayData(results.data);
            }
        });
    } else {
        alert("Veuillez sélectionner un fichier CSV.");
    }
}

function displayData(data) {
    const table = document.getElementById('csv-table');
    table.innerHTML = ""; // Vider le tableau s'il contient déjà des données

    // Ajouter les en-têtes de colonne
    const headerRow = document.createElement('tr');
    data[0].forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Ajouter les lignes de données
    for (let i = 1; i < data.length; i++) {
        const tr = document.createElement('tr');
        data[i].forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    }
}
