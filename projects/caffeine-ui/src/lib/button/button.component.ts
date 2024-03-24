import { Component, Input } from '@angular/core';
import { ButtonColors } from "./button-colors.type";

@Component({
  selector: 'button[caffeine-ui-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'colorClassName'
  }
})
export class ButtonComponent {
  protected readonly baseClassName: string = 'caffeine__ui-button';
  protected colorClassName: string = this.createColorClassName();

  @Input() set color(color: ButtonColors) {
    this.colorClassName = this.createColorClassName(color)
  };

  protected createColorClassName(buttonColor: ButtonColors = 'basic'): string {
    return `${this.baseClassName} ${this.baseClassName}--${buttonColor}`
  }
}
