// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA A PÁGINA DE REPORTE (report.html) ---
    const reportForm = document.getElementById('report-form');
    const successMessage = document.getElementById('success-message');

    // Verifica se o formulário existe na página atual
    if (reportForm) {
        reportForm.addEventListener('submit', (event) => {
            // Previne o comportamento padrão de recarregar a página
            event.preventDefault(); 
            
            // Simulação de envio: esconde o formulário e mostra a mensagem
            reportForm.classList.add('hidden');
            successMessage.classList.remove('hidden');
            
            // Opcional: rola a página para o topo para ver a mensagem
            window.scrollTo(0, 0); 
        });
    }

    // --- LÓGICA PARA A PÁGINA DO MAPA (map.html) ---
    const mapContainer = document.getElementById('map');

    // Verifica se o container do mapa existe na página atual
    if (mapContainer) {
        // Coordenadas do centro de Porto Alegre
        const portoAlegreCoords = [-30.0346, -51.2177];
        
        // 1. Inicializa o mapa
        const map = L.map('map').setView(portoAlegreCoords, 13);

        // 2. Adiciona a camada de visualização do mapa (usando OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // 3. Dados de exemplo (simulando reportes do banco de dados)
        const sampleReports = [
            {
                coords: [-30.057, -51.175],
                title: "Esgoto a Céu Aberto",
                description: "Vazamento de esgoto na calçada há mais de uma semana."
            },
            {
                coords: [-30.033, -51.230],
                title: "Coleta de Lixo Irregular",
                description: "Lixo acumulado na esquina, coleta não passa há dias."
            },
            {
                coords: [-30.021, -51.205],
                title: "Falta de Água Potável",
                description: "Comunidade com fornecimento de água interrompido."
            }
        ];

        // 4. Adiciona marcadores (pins) no mapa para cada reporte
        sampleReports.forEach(report => {
            const marker = L.marker(report.coords).addTo(map);
            marker.bindPopup(`<b>${report.title}</b><br>${report.description}`);
        });
    }

});