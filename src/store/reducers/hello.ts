import { HelloActionsType } from 'src/store/types/hello';

const initialState = '';

export default (state = initialState, { type, payload }: HelloActionsType) => {
  switch (type) {
    case 'set_hello_mst':
      return payload.message;
    case 'set_great_digital_agency':
      return payload.message;
    default:
      return state;
  }
};
