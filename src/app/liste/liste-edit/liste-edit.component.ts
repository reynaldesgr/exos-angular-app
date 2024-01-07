import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liste-edit',
  templateUrl: './liste-edit.component.html',
  styleUrls: ['./liste-edit.component.css']
})

export class ListeEditComponent
{
  @Output() increment = new EventEmitter<void>();

  @Input() message: string | undefined;

  emitIncrement()
  {
    this.increment.emit();
  }

}
