import { AfterViewInit, ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit , AfterViewInit{
    @ViewChild('lineCanvas') private lineCanvas: ElementRef;
    lineChart: any;
  constructor() { }

  ngAfterViewInit(){
      this.lineChartMethod();
  }

  ngOnInit() {
  }

  lineChartMethod(){
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
          type: 'line',
          data: {
              labels: [10,15,20,25,30],
              datasets: [
                  {
                      label: '',
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: 'rgba(232,94,55,0.4)',
                      borderColor: 'rgba(232,94,55,1)',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgba(232,94,55,1)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgba(232,94,55,1)',
                      pointHoverBorderColor: 'rgba(232,94,55,1)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [65, 59, 80, 81, 56],
                      spanGaps: false,
                  }
              ]
          }
      });
  }
}
