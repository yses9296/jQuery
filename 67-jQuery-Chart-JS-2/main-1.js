$(function(){
    
    var ctx = $('#line-chart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [
                {
                    label: '2022',
                    data:[10,5,7,12,15,14,18,5,11,2,9,2],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }

            ]//datasets

        },//data
            
        options: {
            maintainAspectRatio: false, //container의 width,height에 알맞게 사이즈 조절
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }//options

    });//new Chart - line-chart-1

    var ctx = $('#line-chart-2');
    var sun = new Image();
    sun.src = "https://i.imgur.com/yDYW1I7.png";

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [
                {
                    label: '2022',
                    data:[10,5,7,12,15,14,18,5,null,null,9,2],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    tension: .3, //곡선
                    borderDash: [10,10],
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: 'rgba(255, 88, 144, 1)',
                    pointBorderColor:'rgba(177, 88, 190, 0.7)',
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: 'rgba(239, 49, 211, 0.7)',
                    pointHoverBorderColor: 'black',
                    pointStyle: sun, //point 모양 변경
                    spanGaps: true, //빈 공간 채우기.
                    //stepped: true //계단식
                }

            ]//datasets

        },//data
            
        options: {
            maintainAspectRatio: false, //container의 width,height에 알맞게 사이즈 조절
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }//options

    });//new Chart - line-chart-2


})//document ready()