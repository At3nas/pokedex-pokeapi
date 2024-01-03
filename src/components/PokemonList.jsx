import PropTypes from 'prop-types';

export const PokemonList = ({ name }) => {
    return (
        <option value={name}>{name}</option>
    );
}

PokemonList.propTypes = {
    name: PropTypes.string
}