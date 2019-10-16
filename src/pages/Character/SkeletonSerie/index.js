import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function SkeletonSerie() {
  const [skelletons] = useState(Array(4).fill(true));

  return skelletons.map(() => (
    <li>
      <Skeleton circle width={60} height={60} />
      <div>
        <Skeleton width={200} />
        <Skeleton width={500} count={4} />
      </div>
    </li>
  ));
}
