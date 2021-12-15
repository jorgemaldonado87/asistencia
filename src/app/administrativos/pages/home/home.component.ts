import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bloques: any;
  current_data: any = {};
  bloque: any;
  //declare fecha as current date formatted as yyyy-mm-dd
  fecha: any;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [

      {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: 'rgba(223,218,71,0.2)',
        borderColor: 'rgba(131,127,26,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Series C',
        yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(51,49,175,0.3)',
        borderColor: 'rgba(51,49,175,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    ],
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
      {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },

    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }



  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }


  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    if (this.lineChartData.labels) {
      this.lineChartData.labels[2] = ['1st Line', '2nd Line'];
    }

    this.chart?.update();
  }
  constructor(private apiService: ApiService) {

  }

  async ngOnInit() {
    let bloques: any = await this.apiService.get('bloques', {});
    this.bloques = bloques;
    console.log(this.bloques);
    this.bloque = bloques[0].id_bloques;
    this.fecha = new Date().toISOString().slice(0, 10)
    this.loadData();
    //generate PieChartData with data
    //use keys for labels and values for data


  }


  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },

    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
    datasets: [{
      data: [300, 500, 100]
    }]
  };
  public pieChartType: ChartType = 'pie';


  async loadData() {
    this.current_data = [];
    console.log(this.bloque);
    let data: any = await this.apiService.get('asistencia/byBloque?bloque_id='+this.bloque+'&fecha='+this.fecha+' 00:00:00', {});



    data.pendientes = data.total_alumnos - data.ausentes - data.presentes;
    delete data.total_alumnos;
    this.current_data = data;
    let pieChartData: ChartData<'pie', number[], string | string[]> = {
      labels: Object.keys(data),
      datasets: [
        {
          data: Object.values(data),
        }]
    };
    this.pieChartData = pieChartData;
  }
}
