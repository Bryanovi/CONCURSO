import { Injectable } from '@angular/core';

export interface IMenu {
  number: string;
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listaMenu: IMenu[] = [
    { number: '1', title: 'Home', url: '/', icon: 'fa-solid fa-house' },
    
    {
      number: '2',
      title: 'Proyectos',
      url: '/proyecto',
      icon: 'bi bi-briefcase-fill',
    },
    {
      number: '3',
      title: 'Tareas',
      url: '/tarea',
      icon: 'bi bi-briefcase-fill',
    },
    {
      number: '4',
      title: 'Proyectos',
      url: '/proyecto',
      icon: 'bi bi-briefcase-fill',
    },
    
  ];
  constructor() {}

  getMenu(): IMenu[] {
    return [...this.listaMenu];
  }

  getMenuByUrl(url: string): IMenu {
    return this.listaMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu;
  }
}
