$(function(){
    

    const ctx = $('#line-chart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [
                {
                    label: '2021',
                    data:[12,9,15,6,9,20,14,13,16,8,17,12]
                },
                {
                    label: '2022',
                    data:[10,5,7,12,15,14,18,5,11,2,9,2]
                }

            ]//datasets

        },//data
            
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }//options

    });//new Chart


})//document ready()