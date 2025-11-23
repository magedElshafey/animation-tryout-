export interface LinkItem {
  title: string;
  list?: string[];
}

export interface NavbarList {
  description: string;
  links: LinkItem[];
}

export interface NavbarLink {
  title: string;
  list?: NavbarList;
}
