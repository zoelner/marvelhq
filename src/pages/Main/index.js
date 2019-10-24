import React, { useState, useEffect } from 'react';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import Container from '~/components/Container';
import Marvel from '~/assets/images/marvel.svg';
import { api, params } from '~/services/api';
import Loading from '~/components/Loading';
import { parseCharacter } from '~/utils';

import { Form, SubmitButton, List, Footer } from './styles';

export default function Main() {
  const [search, setSearch] = useState('');

  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [offset, setOffset] = useState(0);

  async function load(nameStartsWith = '', page = 0) {
    setLoading(true);

    if (nameStartsWith === '') nameStartsWith = undefined;

    const response = await api.get('characters', {
      params: { ...params, nameStartsWith, limit: 10, offset: 10 * page },
    });

    setCharacters(response.data.data.results.map(parseCharacter));
    setTotal(response.data.data.total);
    setCount(response.data.data.count);
    setOffset(response.data.data.offset);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  function reset() {
    setCharacters([]);
    setTotal(0);
    setCount(0);
    setOffset(0);
  }

  function handleSubmit(e) {
    e.preventDefault();
    reset();
    load(search);
  }

  function handleInputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <Container>
      <header>
        <img src={Marvel} alt="Logo Marvel" />
      </header>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={handleInputChange}
        />

        <SubmitButton>
          <FaSearch color="#FFF" size={14} />
        </SubmitButton>
      </Form>

      <List>
        {loading ? (
          <Loading />
        ) : (
          characters.map(character => (
            <li key={character.name}>
              <div>
                <img
                  className="image"
                  src={character.thumbnail}
                  alt={character.name}
                />
                <span>{character.name}</span>
              </div>
              <Link to={`/character/${character.id}`}>Detalhes</Link>
            </li>
          ))
        )}
      </List>
      {!!(total - count * (offset || 1)) && (
        <Footer>
          <ReactPaginate
            pageCount={Math.ceil(total / 10)}
            pageRangeDisplayed={2}
            onPageChange={({ selected }) => load(search, selected)}
            nextLabel={<FaArrowRight />}
            previousLabel={<FaArrowLeft />}
          />
        </Footer>
      )}
    </Container>
  );
}
