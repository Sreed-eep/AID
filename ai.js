   const ctxLikelihood = document.getElementById('likelihood-chart').getContext('2d');
    const ctxRelevance = document.getElementById('relevance-chart').getContext('2d');
    
    const intensityChart = new Chart(ctxIntensity, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C'], // Sample labels
            datasets: [{
                label: 'Intensity',
                data: [12, 19, 3], // Sample data
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }document.addEventListener('DOMContentLoaded', () => {
    const ctxIntensity = document.getElementById('intensity-chart').getContext('2d');

    });

    const likelihoodChart = new Chart(ctxLikelihood, {
        type: 'line',
        data: {
            labels: ['A', 'B', 'C'], // Sample labels
            datasets: [{
                label: 'Likelihood',
                data: [5, 2, 9], // Sample data
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const relevanceChart = new Chart(ctxRelevance, {
        type: 'pie',
        data: {
            labels: ['A', 'B', 'C'], // Sample labels
            datasets: [{
                label: 'Relevance',
                data: [7, 11, 5], // Sample data
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // You can add event listeners to the filters to update the charts dynamically
    document.getElementById('end-year').addEventListener('change', updateCharts);
    document.getElementById('topics').addEventListener('change', updateCharts);
    // Add more event listeners for other filters

    function updateCharts() {
        // Logic to update charts based on filter values
        // Fetch new data and update charts using chart.data.datasets[0].data = newData;
        intensityChart.update();
        likelihoodChart.update();
        relevanceChart.update();
    }
});
