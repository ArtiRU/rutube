import { FC } from 'react';
import * as MaterialIcons from 'react-icons/hi';

type TypeMaterialIconName = keyof typeof MaterialIcons;

const ReactIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent /> || <MaterialIcons.HiDeviceMobile />;
};

export default ReactIcon;
