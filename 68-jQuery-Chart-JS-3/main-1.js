$(function(){

    const labels = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'
    ];
    let data2021 = {
        label: '2021',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 0, 0)',
        data: [10, 5, 5, 4, 10, 5, 20, 16, 14, 17, 11, 6],
    };//data2021

    let data2022 = {
        label: '2022',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(0, 0, 255)',
        data: [0, 10, 5, 17, 20, 30, 45, 41, 37, 39, 14, 19]      
    };//data2022
    
    const data = {
        labels: labels,
        datasets: [data2021,data2022]
    };//data

    const config = {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio :false,
            scales: {
                y: {
                    stacked: true
                }
            }
        }
    }; //config
    
    const myChart = new Chart(
        document.getElementById('line-chart'),
        config
    );//new Chart 


})//document ready()