/**
 * Created by session2 on 10/7/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawRightY);

function drawRightY() {
    var data = google.visualization.arrayToDataTable([
        ['City', '2011 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Meme, CA', 8000000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ]);

    var options = {
        chart: {
            title: 'Population of Largest U.S. Cities',
            subtitle: 'Based on most recent and previous census data'
        },
        hAxis: {
            title: 'Total Population',
            minValue: 0,
        },
        vAxis: {
            title: 'City'.fontcolor("blue")
        },
        bars: 'horizontal',
        axes: {
            y: {
                0: {side: 'right'}
            }
        }
    };
    var material = new google.charts.Bar(document.getElementById('chart_div'));
    material.draw(data, options);
}