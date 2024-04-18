import { Component } from '@angular/core';

@Component({
  selector: 'app-statusocorrencias',
  templateUrl: './statusocorrencias.component.html',
  styleUrl: './statusocorrencias.component.css'
})
export class StatusocorrenciasComponent {
  currentComponent: string = 'none';

  openComponent(hyperlink: any) {
    if (hyperlink) {
      if (hyperlink.id == "list")
        this.currentComponent = "list-status";
      else if (hyperlink.id == "create")
        this.currentComponent = "create-status";
      else if (hyperlink.id == "update")
        this.currentComponent = "update-status";
      else if (hyperlink.id == "read")
        this.currentComponent = "read-status";
      else if (hyperlink.id == "delete")
        this.currentComponent = "delete-status";
      else if (hyperlink.id == "bydescricao")
      this.currentComponent = "bydescricao-status";
      else
        this.currentComponent = '';
    }
  }
}
