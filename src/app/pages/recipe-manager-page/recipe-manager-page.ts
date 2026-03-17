import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recette } from '../../models/recette.model';
import { RecetteService } from '../../services/recette.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//TODO 1: Ajouter les 2 imports : Char + registerables
import { Chart, registerables } from 'chart.js/auto'

Chart.register(...registerables); // A placer juste après les imports !

@Component({
  selector: 'app-recipe-manager-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recipe-manager-page.html',
  styleUrl: './recipe-manager-page.css'
})

export class RecipeManagerPage implements OnInit {

  public recettes: Recette[] = [];

  // Propriété pour stocker la recette à afficher dans la modale
  public recetteSelectionnee: Recette | null = null;

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.chargerRecettes();
  }

  // chargerRecettes(): void {
  //   this.recetteService.getRecettes().subscribe({
  //     next: (data) => this.recettes = data,
  //     error: (err) => console.error("Erreur API", err)
  //   });
  // }

  // TODO 2: Remplacer la méthode chargerRecettes() par cette version :
  /**
   * Charge les recettes et initialise les graphiques
   */
  chargerRecettes(): void {
    this.recetteService.getRecettes().subscribe(data => {
      this.recettes = data;
      // On attend un court instant que le DOM se mette à jour avec le @for
      setTimeout(() => {
        this.recettes.forEach(r => this.initChart(r));
      }, 100);
    });
  }

  supprimerRecette(id: number): void {
    if (confirm("Supprimer cette recette ?")) {
      this.recetteService.deleteRecette(id).subscribe(() =>
        this.chargerRecettes());
    }
  }

  // TODO3 : Ajouter la méthode :
  /**
  * Crée le graphique Radar pour une recette spécifique
  */
  // initChart(recette: Recette): void {
  //   const ctx = document.getElementById(`chart-${recette.id}`) as
  //     HTMLCanvasElement;
  //   if (!ctx) return;

  //   new Chart(ctx, {
  //     type: 'radar',
  //     data: {
  //       labels: recette.resultats.map(res => res.caracteristique.nom),
  //       datasets: [{
  //         label: 'Scores',
  //         data: recette.resultats.map(res => res.score),
  //         fill: true,
  //         backgroundColor: 'rgba(210, 0, 255, 0.2)',
  //         borderColor: 'rgb(210, 0, 255)',
  //         pointBackgroundColor: 'rgb(0, 180, 0)',
  //         pointBorderColor: 'rgb(0, 180, 0)',
  //         pointHoverBackgroundColor: 'rgb(255, 255, 255)',
  //         pointHoverBorderColor: 'rgb(0, 180, 0)'
  //       }]
  //     },
  //     options: {
  //       elements: { line: { borderWidth: 2 } },
  //       scales: {
  //         r: {
  //           suggestedMin: 0, suggestedMax: 10, ticks: { stepSize: 1 }
  //         }
  //       },
  //       plugins: { legend: { display: false } }
  //     }
  //   });
  // }

  private charts: Chart[] = [];

  initChart(recette: Recette): void {
    const ctx = document.getElementById(`chart-${recette.id}`) as HTMLCanvasElement;
    if (!ctx) return;

    // Si un chart existe déjà sur ce canvas, on le détruit
    const existingChart = this.charts.find(c => c.canvas.id === ctx.id);
    if (existingChart) {
      existingChart.destroy();
      this.charts = this.charts.filter(c => c !== existingChart);
    }

    const chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: recette.resultats.map(res => res.caracteristique.nom),
        datasets: [{
          label: 'Scores',
          data: recette.resultats.map(res => res.score),
          fill: true,
          backgroundColor: 'rgba(210, 0, 255, 0.2)',
          borderColor: 'rgb(210, 0, 255)',
          pointBackgroundColor: 'rgb(0, 180, 0)',
          pointBorderColor: 'rgb(0, 180, 0)',
          pointHoverBackgroundColor: 'rgb(255, 255, 255)',
          pointHoverBorderColor: 'rgb(0, 180, 0)'
        }]
      },
      options: {
        elements: { line: { borderWidth: 2 } },
        scales: {
          r: {
            suggestedMin: 0, suggestedMax: 10, ticks: { stepSize: 1 }
          }
        },
        plugins: { legend: { display: false } }
      }
    });

    this.charts.push(chart);
  }

  /**
 * Définit la recette sélectionnée pour l'affichage des détails
 */
  ouvrirModale(recette: Recette): void {
    this.recetteSelectionnee = recette;
  }

  /**
   * Réinitialise la sélection à la fermeture
   */
  fermerModale(): void {
    this.recetteSelectionnee = null;
  }
}