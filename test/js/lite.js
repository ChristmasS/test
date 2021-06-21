  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        let ran = getRandomInt(4);
        let mas_td = [];
        switch(ran){
          case 0:{
             var data = google.visualization.arrayToDataTable([
             ['Год', '', ''],
             ['Mond',  800,      900],
             ['Tues',  110,      460],
             ['Wedn',  102,      109],
             ['Thur',  950,      540]
             ]);
            var options = {
             curveType: 'function',
             legend: { position: 'bottom' }
             };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
            break;
          }
          case 1:{
            var data = google.visualization.arrayToDataTable([
             ['Год', '', ''],
             ['Mond',  400,      100],
             ['Tues',  210,      460],
             ['Wedn',  198,      201],
             ['Thur',  750,      340]
             ]);
            var options = {
             curveType: 'function',
             legend: { position: 'bottom' }
             };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
            break;
          }
          case 2:{
            var data = google.visualization.arrayToDataTable([
             ['День', '', ''],
             ['Mond',  720,      784],
             ['Tues',  510,      214],
             ['Wedn',  153,      107],
             ['Thur',  350,      340]
             ]);
            var options = {
             curveType: 'function',
             legend: { position: 'bottom' }
             };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
            break;
          }
          case 3:{
            var data = google.visualization.arrayToDataTable([
             ['Год', '', ''],
             ['Mond',  430,      120],
             ['Tues',  340,      647],
             ['Wedn',  162,      134],
             ['Thur',  530,      723]
             ]);
            var options = {
             curveType: 'function',
             legend: { position: 'bottom' }
             };

            var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

            chart.draw(data, options);
            break;
          }
        }
        let val = google.visualization.dataTableToCsv(data);
        let mas = [];
        mas[0] = val.slice(5, 8);
        mas[1] = val.slice(9, 12);
        mas[2] = val.slice(18, 21);
        mas[3] = val.slice(22, 25);
        mas[4] = val.slice(31, 34);
        mas[5] = val.slice(35, 39);
        mas[6] = val.slice(44, 47);
        mas[7] = val.slice(48, 51);

        let cl_1 = document.getElementById('cl_tod_1');
        let cl_2 = document.getElementById('cl_tod_2');
        let cl_3 = document.getElementById('cl_tod_3');
        let cl_4 = document.getElementById('cl_tod_4');
        let cl_5 = document.getElementById('cl_tod_5');
        let cl_6 = document.getElementById('cl_tod_6');
        let cl_7 = document.getElementById('cl_tod_7');
        let cl_8 = document.getElementById('cl_tod_8');
        let sum = 0;
        let sum_td = 0;
        for(let i = 1; i < 4; i++){
            sum += +mas[i];
        }
        cl_1.innerHTML = sum;
        cl_2.innerHTML = mas[1];
        cl_3.innerHTML = mas[2];
        cl_4.innerHTML = mas[3];
        cl_5.innerHTML = mas[4];
        cl_6.innerHTML = mas[5];
        cl_7.innerHTML = mas[6];
        cl_8.innerHTML = mas[7];

        for(let i = 0; i < 8; i++){
          let aran = getRandomInts(150, 1000);
          mas_td[i] = aran;
        }

        let cl_9 =  document.getElementById('cl_emp_9');
        let cl_10 = document.getElementById('cl_emp_10');
        let cl_11 = document.getElementById('cl_emp_11');
        let cl_12 = document.getElementById('cl_emp_12');
        let cl_13 = document.getElementById('cl_emp_13');
        let cl_14 = document.getElementById('cl_emp_14');
        let cl_15 = document.getElementById('cl_emp_15');
        let cl_16 = document.getElementById('cl_emp_16');

        for(let i = 1; i < 4; i++){
            sum_td += +mas_td[i];
        }

        cl_9.innerHTML = sum_td;
        cl_10.innerHTML = mas_td[1];
        cl_11.innerHTML = mas_td[2];
        cl_12.innerHTML = mas_td[3];
        cl_13.innerHTML = mas_td[4];
        cl_14.innerHTML = mas_td[5];
        cl_15.innerHTML = mas_td[6];
        cl_16.innerHTML = mas_td[7];

        for(let i = 1; i < 8; i++){
          if(+mas_td[i] < +mas[i]){
            switch(i){
              case 1:{
                cl_10.style.background = 'hsl(0, 100%, 89%)';    
                break;
              }
              case 2:{
                cl_11.style.background = 'hsl(0, 100%, 89%)'; 
                break;
              }
              case 3:{
                cl_12.style.background = 'hsl(0, 100%, 89%)'; 
                break;
              }
              case 4:{
                cl_13.style.background = 'hsl(0, 100%, 89%)'; 
                break;
              }
              case 5:{
                cl_14.style.background = 'hsl(0, 100%, 89%)'; 
                break;
              }
              case 6:{
                cl_15.style.background = 'hsl(0, 100%, 89%)'; 
                break;
              }
              case 7:{
                cl_16.style.background = 'hsl(0, 100%, 89%)'; 
                break;
              }
            }
          }else{
            switch(i){
              case 1:{
                cl_10.style.background = 'hsl(105, 100%, 91%)';    
                break;
              }
              case 2:{
                cl_11.style.background = 'hsl(105, 100%, 91%)'; 
                break;
              }
              case 3:{
                cl_12.style.background = 'hsl(105, 100%, 91%)'; 
                break;
              }
              case 4:{
                cl_13.style.background = 'hsl(105, 100%, 91%)'; 
                break;
              }
              case 5:{
                cl_14.style.background = 'hsl(105, 100%, 91%)'; 
                break;
              }
              case 6:{
                cl_15.style.background = 'hsl(105, 100%, 91%)'; 
                break;
              }
              case 7:{
                cl_16.style.background = 'hsl(105, 100%, 91%)'; 
                break;
              }
            }
          }
        }
       

function getRandomInts(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}       
function getRandomInt(max) {return Math.floor(Math.random() * max);}
}