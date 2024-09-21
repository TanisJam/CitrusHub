import { icons } from 'lucide-react';
export type ServiceCardProps =
  | {
      addNew: true;
      name?: string;
      icon?: keyof typeof icons;
      online?: boolean;
      link?: string;
    }
  | {
      addNew?: false;
      name: string;
      icon: keyof typeof icons;
      online?: boolean;
      link?: string;
    };
