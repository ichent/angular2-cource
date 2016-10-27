import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'widgets',
  templateUrl: './widgets.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WidgetsComponent {
  public theme: string;

  constructor() {}

  public onChangeTab(tabType: string) {
    this.theme = tabType;
  }
}
