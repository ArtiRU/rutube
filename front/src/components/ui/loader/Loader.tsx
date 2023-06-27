import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

const Loader: FC<SkeletonProps> = props => {
  return (
    <Skeleton
      className="rounded-xl h-8 my-1"
      baseColor="#2d2c35"
      highlightColor="#353340"
      {...props}
    />
  );
};

export default Loader;
