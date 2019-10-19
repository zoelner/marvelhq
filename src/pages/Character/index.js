import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../../components/Container';

import Serie from './Serie';
import SkeletonSerie from './SkeletonSerie';

import { Header, List } from './styles';
import { loadCharacterRequest } from '../../store/modules/character/actions';

export default function Character({ match }) {
  const characterId = parseInt(match.params.id, 10);

  const character =
    useSelector(state =>
      state.character.data.find(m => m.id === characterId)
    ) || {};

  const dispatch = useDispatch();

  useEffect(() => {
    if (!character.id) {
      dispatch(loadCharacterRequest(characterId));
    }
  });

  return (
    <Container>
      <Header>
        <Link to="/">Voltar para lista de personagens</Link>
        {character.thumbnail ? (
          <img src={character.thumbnail} alt={character.name} />
        ) : (
          <Skeleton circle height={150} width={150} />
        )}
        <h1>{character.name || <Skeleton width={100} />}</h1>
        <p>{character.description || <Skeleton width={400} count={5} />}</p>
      </Header>

      <List>
        {character.series ? (
          character.series.map(serie => (
            <Serie key={String(serie.id)} data={serie} />
          ))
        ) : (
          <SkeletonSerie />
        )}
      </List>
    </Container>
  );
}
