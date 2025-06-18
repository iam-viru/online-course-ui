import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-demo',
  imports: [CommonModule,FormsModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {

  //this is called structural directive example
  showContent: boolean = true;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  selectedColor: string = 'red';

  //this is called attribute directive example
  colors: string[] = ['red', 'green', 'blue'];
  isActive: boolean = false;
  isHighlighted: boolean = false;


}
