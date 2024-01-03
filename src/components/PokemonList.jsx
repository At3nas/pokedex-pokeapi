import PropTypes from 'prop-types';

export const PokemonList = ({ name }) => {
    return (
        <option>{name}</option>
    );
}

PokemonList.propTypes = {
    name: PropTypes.string
}