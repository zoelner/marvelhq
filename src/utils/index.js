function imagePath({ path, extension }) {
  return `${path}.${extension}`;
}

export function parseCharacter(character) {
  return {
    id: character.id,
    name: character.name,
    thumbnail: imagePath(character.thumbnail),
    description: character.description || 'Sem descrição',
  };
}

export function parseSeries(series) {
  return {
    id: series.id,
    title: series.title,
    thumbnail: imagePath(series.thumbnail),
    description: series.description || 'Sem descrição',
  };
}
