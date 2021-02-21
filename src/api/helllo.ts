import { HelloType, ListType } from 'src/types/hello';

import $axios from '.';

type CreateHelloType = {
  message: string;
};

export const getHello = () => $axios.get<ListType<HelloType>>('hello');

export const createHello = (data: CreateHelloType) => $axios.post<HelloType>('hello', data);
