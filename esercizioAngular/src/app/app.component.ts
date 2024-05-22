import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  data: iPost[] = [];  // Usa l'interfaccia per definire il tipo di dati

  constructor(private ActivePostComponent: ActivePostComponent) { }  // Inietta il servizio

  ngOnInit(): void {
    this.ActivePostComponent.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
