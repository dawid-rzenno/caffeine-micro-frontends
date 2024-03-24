import { Component, Input } from '@angular/core';

export enum ButtonColor {
  Basic,
  Primary,
  Accent,
  Warn,
  Disabled,
  Link
}

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: ButtonColor = ButtonColor.Basic;
}
