import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

export default function SkeletonSerie() {
  const [skelletons] = useState(
    Array(4).map(() =>
      Math.random()
        .toString(36)
        .substring(7)
    )
  );

  return skelletons.map(skeleton => (
    <li key={skeleton}>
      <Skeleton circle width={60} height={60} />
      <div>
        <Skeleton width={200} />
        <Skeleton width={500} count={4} />
      </div>
    </li>
  ));
}
