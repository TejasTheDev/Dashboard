const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Youtube', 'Instagram', 'Flipkart'],
        datasets: [{
            label: 'Traffic Source',
            data: [5000, 2000, 8990],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
        }]
    },
        options: {
            Responsive: true,
        }
}); 


const myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Earning',
            data: [1200, 1900, 300, 500, 200, 300, 700, 200, 900, 200, 300, 400],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
        Responsive: true,
    }
});