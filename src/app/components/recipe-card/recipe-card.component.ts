import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Output() ingredients = new EventEmitter<any>();
  selected = false;

  mockData = {
    name: 'Macaron',
    ingredients: [
      '1.75 cups powdered sugar',
      '1 cup almond flour',
      '1 teaspoon salt',
      '3 egg whites',
      '0.25 cups sugar',
      '0.5 teaspoon vanilla extract',
    ],
  };

  onClick() {
    this.selected = !this.selected;
    if (this.selected === true) {
      this.ingredients.emit(this.mockData.ingredients);
    } else if (this.selected === false) {
      this.ingredients.emit([]);
    }
  }
}
