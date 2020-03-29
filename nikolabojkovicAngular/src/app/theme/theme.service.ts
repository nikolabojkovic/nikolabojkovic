import { Injectable } from '@angular/core';
import { Theme } from './theme';
import { light } from './themes/light.theme';
import { dark } from './themes/dark.theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private active: Theme = light;
  private availableThemes: Theme[] = [light, dark];

  constructor() { }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
