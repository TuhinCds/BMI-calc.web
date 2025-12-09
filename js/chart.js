const ctx = document.getElementById('bmiChart').getContext('2d');

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Normal', 'Underweight', 'Overweight', 'Obese I', 'Obese II+'],
        datasets: [{
          label: 'BMI Range',
          data: [24.9 - 18.5, 18.4 - 17.0, 29.9 - 25.0, 34.9 - 30.0, 10],
          backgroundColor: [
            '#06e5b8ff',
            '#f9d766ff',
            '#fba08bff',
            '#f95757ff',
            '#786efaff'
          ],
          borderWidth: 2,
          borderColor: '#111',
          hoverOffset: 20
        }]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {

            backgroundColor: '#2d3436',
            titleColor: '#ffffffff',
            bodyColor: '#fff',
            borderColor: '#ffffffff',
            borderWidth: 1
          },

          legend: {
            display: false
          }
        },
        layout: {
          padding: 10
        },
        animation: {
          animateRotate: true,
          duration: 1500
        }
      }
    });

