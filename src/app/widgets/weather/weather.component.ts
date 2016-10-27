import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WeatherComponent {
  @Input() public theme: any;
  public themes: any;

  constructor() {}

  ngOnInit() {
    this.themes = {
      "hotels": {
        temp: 14, title: "Отели", water: 0
      },
      "fishing": {
        temp: 20, title: "Рыбалка", water: 10
      },
      "tours": {
        temp: -5, title: "Туры", water: 15
      },
      "weather": {
        temp: 0, title: "Погода",  water: 22
      },
    };
  }
}
