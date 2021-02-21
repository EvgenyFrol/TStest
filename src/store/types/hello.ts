export type SetHelloMSTType = {
  type: 'set_hello_mst';
  payload: {
    message: 'Hello MST!';
  };
};

export type SetGreatDigitalAgencyType = {
  type: 'set_great_digital_agency';
  payload: {
    message: 'Great Digital Agency!';
  };
};

export type HelloActionsType = SetHelloMSTType | SetGreatDigitalAgencyType;
