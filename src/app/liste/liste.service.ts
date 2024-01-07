import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})

export class ListeService
{
  private items = ["Pulp Fiction", "Kill Bill", "Forrest Gump", "Willy Wonka"];

  getItems()
  {
    return this.items;
  }

  addItems(item: string)
  {
    this.items.push(item);
  }
}
