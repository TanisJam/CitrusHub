import { Icon } from '../../Atoms/Icon';
import { StatusLed } from '../../Atoms/StatusLed';
import { ServiceCardProps } from './types';
import { Plus, InfoIcon, ExternalLinkIcon } from 'lucide-react';

export default function ServiceCard({
  name,
  addNew,
  icon,
  online,
  link,
}: ServiceCardProps) {
  if (addNew)
    return (
      <div className="relative w-28 h-28 bg-ligth-blue rounded-md flex flex-col items-center justify-center border-dashed">
        <Plus className="w-16 h-16 text-light hover:drop-shadow-xl transition-all duration-150" />
        <span className="text-white text-sm mt-1 font-bold">Add New</span>
      </div>
    );

  return (
    <div
      className="relative w-28 h-28 bg-ligth-blue rounded-lg flex flex-col items-center justify-center
    
    before:contents-[''] before:absolute before:inset-0 before:rounded-lg before:bg-dark before:hover:opacity-70 before:opacity-0 before:transition-opacity before:duration-150
    "
    >
      <div className="absolute flex justify-center items-center gap-8 text-white h-full w-full  opacity-0 hover:opacity-100 transition-opacity duration-150">
        <a
          href={link}
          target="_blank"
          className=" hover:scale-125 transition-transform duration-150"
        >
          <InfoIcon className="w-8 h-8" />
        </a>
        <a
          href={link}
          target="_blank"
          className=" hover:scale-125 transition-transform duration-150"
        >
          <ExternalLinkIcon className="w-8 h-8" />
        </a>
      </div>
      {online !== undefined && (
        <StatusLed className="absolute top-2 right-2" online={online} />
      )}

      <Icon name={icon} className="w-14 h-14 text-light" />
      <span className="text-white text-sm font-bold mt-1">{name}</span>
    </div>
  );
}
