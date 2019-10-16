import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import Container from '../../components/Container';
import { api, params } from '../../services/api';
import { parseCharacter, parseSeries } from '../../utils';

import Serie from './Serie';
import SkeletonSerie from './SkeletonSerie';
import { Header, List } from './styles';

export default function Character({ match }) {
  const characterId = match.params.id;

  const [character, setCharacter] = useState({});
  const [series, setSeries] = useState(null);

  useEffect(() => {
    async function load() {
      const [payloadCharacter, payloadSeries] = await Promise.all([
        await api.get(`/characters/${characterId}`, { params }),
        await api.get(`/characters/${characterId}/series`, { params }),
      ]);

      setCharacter(parseCharacter(payloadCharacter.data.data.results[0]));
      setSeries(payloadSeries.data.data.results.map(parseSeries));
    }

    load();
  }, [characterId]);

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
        {series ? (
          series.map(serie => <Serie key={String(serie.id)} data={serie} />)
        ) : (
          <SkeletonSerie />
        )}
      </List>
    </Container>
  );
}
