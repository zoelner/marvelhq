import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Scope } from '@rocketseat/unform';
import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button';
import Container from '../../../components/Container';
import history from '../../../services/history';

import { Form, Character, Series } from './styles';

import {
  loadCharacterRequest,
  editCharacterLocal,
} from '../../../store/modules/character/actions';

export default function CharacterEdit({ match }) {
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

  function handleSubmit(e) {
    dispatch(editCharacterLocal(e));
    history.push(`/character/${characterId}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} initialData={character}>
        <Character>
          <div>
            <Link to={`/character/${characterId}`}>
              <MdArrowBack />
            </Link>
            <h1>Character</h1>
          </div>
          <Input disabled name="id" />
          <Input name="name" />
          <Input name="thumbnail" />
          <Input multiline name="description" />
        </Character>

        <h1>Series</h1>
        {character.series &&
          character.series.map((serie, i) => (
            <Series key={serie.id}>
              <Scope path={`series.${i}`}>
                <Input disabled name="id" hidden />
                <Input name="title" />
                <Input name="thumbnail" />
                <Input multiline name="description" />
              </Scope>
            </Series>
          ))}
        <Button type="submit">Editar</Button>
      </Form>
    </Container>
  );
}
