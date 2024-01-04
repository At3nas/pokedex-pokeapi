import PropTypes from 'prop-types';

export const PokemonList = ({ name, id }) => {
    function formatId() {
        let newId = id;
        if (id >= 0 && id <= 9) {
            newId = "00" + id;
        } else if (id >= 10 && id <= 99) {
            newId = "0" + id;
        }
        return newId;
    }


    return (
        <>
            <option value={name}>No {formatId()} {name}</option>
        </>
    );
}

PokemonList.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number
}