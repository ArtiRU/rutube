export interface IMenuItem {
  title: string;
  link: string;
  icon?: string;
  image?: string;
}

export interface IMenu {
  title: string;
  items: IMenuItem[];
}
