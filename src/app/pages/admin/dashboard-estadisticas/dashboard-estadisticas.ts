import { Component } from '@angular/core';
import { Posts } from '../../../services/posts/posts';
import { Comments } from '../../../services/comments/comments';
import { FormsModule } from '@angular/forms';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar escalas y elementos necesarios
Chart.register(BarController, BarElement, CategoryScale, LinearScale, DoughnutController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-dashboard-estadisticas',
  imports: [FormsModule],
  templateUrl: './dashboard-estadisticas.html',
  styleUrl: './dashboard-estadisticas.css',
})
export class DashboardEstadisticas {

  date1 : Date = new Date();
  date2 : Date = new Date();

  show = false

  chart1! : any;
  chart2! : any;
  chart3! : any;

  response = this.date1.setMonth(this.date2.getMonth() - 1);

  constructor(private postServices : Posts , private commentServices : Comments){}

  async generarGraficos(){
    try {

      if(this.date1 > this.date2){
        throw new Error("La fecha final no debe ser mayor a la inicial");
      }

      this.show = true;

    if (this.chart1) this.chart1.destroy();
    if (this.chart2) this.chart2.destroy();
    if (this.chart3) this.chart3.destroy();

    const response1 = await this.postServices.getPostsByDate({"inicio": this.date1, "final": this.date2})
    const response2 = await this.commentServices.getCommentsByDate({"inicio": this.date1, "final": this.date2})
    const response3 = await this.commentServices.getCommentsByPost({"inicio": this.date1, "final": this.date2})

    if(response1.data.error == undefined){
      throw new Error("No hay informacion disponible en estas fechas")
    }
    

    const labels1 = Object.keys(response1.data)
    const labels2 = Object.keys(response2.data)
    const labels3 = Object.keys(response3.data)

    const values1 = Object.values(response1.data)
    const values2 = Object.values(response2.data)
    const values3 = Object.values(response3.data)


     this.chart1 = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: labels1,
        datasets: [{
          label: 'Publicaciones',
          data: values1,
          borderWidth: 1,
          backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40'
      ],
        }]
      },
      
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

     this.chart2 = new Chart('myChart2', {
      type: 'bar',
      data: {
        labels: labels2,
        datasets: [{
          label: 'Publicaciones',
          data: values2,
          borderWidth: 1,
          backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40'
      ],
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

     this.chart3 = new Chart('myChart3', {
      type: 'bar',
      data: {
        labels: labels3,
        datasets: [{
          label: 'Publicaciones',
          data: values3,
          borderWidth: 1,
          backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40'
      ],
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
    } catch (error : any) {
      alert(error.message)
    }
    
  }

}
