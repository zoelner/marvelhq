import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../../../components/Container';
import Button from '../../../components/Button';

import Serie from './Serie';
import SkeletonSerie from './SkeletonSerie';

import { Header, List } from './styles';
import { loadCharacterRequest } from '../../../store/modules/character/actions';

export default function CharacterView({ match }) {
  const characterId = match.params.id;

  const character =
    useSelector(state =>
      state.character.data.find(m => m.id === characterId)
    ) || {};

  const dispatch = useDispatch();

  useEffect(() => {
    if (!character.id) {
      dispatch(loadCharacterRequest(characterId));
    }
  }, [character.id, characterId, dispatch]);

  return (
    <Container>
      <Header>
        <Link to="/">Voltar para lista de personagens</Link>
        <Link to={`/character/${characterId}/edit`} type="button">
          <Button>Editar personagem</Button>
        </Link>
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
