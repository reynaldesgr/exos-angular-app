import { Component } from '@angular/core';

// Form
import { FormControl, FormGroup } from '@angular/forms';

// Service
import { ListeService } from './liste.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})

export class ListeComponent {

  counter: number = 0;

  messageFromP: string = "Good morning from parent.";

  listForm = new FormGroup(
    {
      item: new FormControl('')
    }
  )


  constructor(private listeService: ListeService){}

  // retourner les items du service liste
  get items()
  {
    return this.listeService.getItems();
  }

  addItemToTheList(){
    const item = this.listForm.value.item;
    if (item)
    {
      this.listeService.addItems(item);
      this.listForm.reset();
    }
  }

  incrementCounter()
  {
    this.counter++;
  }

}
