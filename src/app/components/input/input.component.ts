import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() isVisible?: boolean
  @Input() placeHolder?: string

  toggleVisibility() {
    this.isVisible = !this.isVisible
  }

}
