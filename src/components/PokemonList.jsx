import PropTypes from 'prop-types';
import { formatId } from '../utils';

export const PokemonList = ({ name, id }) => {
  return (
    <>
      <option value={name}>N°.{formatId(id)} {name}</option>
    </>
  );
}

PokemonList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
}