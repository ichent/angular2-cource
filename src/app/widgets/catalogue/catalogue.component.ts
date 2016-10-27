import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'catalogue',
  templateUrl: './catalogue.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CatalogueComponent {
  @Output() public change: EventEmitter<any> = new EventEmitter<any>();
  public tabs: any = [];

  constructor() {}

  ngOnInit() {
    this.tabs = [
      {title: "Отели", type: "hotels"},
      {title: "Рыбалка", type: "fishing"},
      {title: "Туры", type: "tours"},
      {title: "Погода", type: "weather"},
    ]
  }

  public changeTab(type: string) {
    this.tabs.map(tab => tab.selected = tab.type === type);

    this.change.next(type);
  }
}
