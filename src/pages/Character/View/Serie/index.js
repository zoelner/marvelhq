import React from 'react';

export default function Serie({ data }) {
  return (
    <li>
      <img src={data.thumbnail} alt={data.title} />
      <div>
        <strong>{data.title}</strong>
        <p>{data.description}</p>
      </div>
    </li>
  );
}
