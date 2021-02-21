import { SetGreatDigitalAgencyType, SetHelloMSTType } from 'src/store/types/hello';

export const setHelloMST = (message: 'Hello MST!'): SetHelloMSTType => ({
  type: 'set_hello_mst',
  payload: {
    message,
  },
});

export const setGreatDigitalAgency = (message: 'Great Digital Agency!'): SetGreatDigitalAgencyType => ({
  type: 'set_great_digital_agency',
  payload: {
    message,
  },
});
