/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
import 'src/components/Multiselect/Multiselect.scss';

import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { itemData } from 'src/types/itemData';
import { ApiData } from 'src/types/resources';

type MultiselectProps = {
  data: ApiData[] | String[];
  arr: itemData[];
  changeArr: Function;
};

export type typeInputItem = {
  isChecked: boolean;
  value: any;
  index?: number;
  onChange: (item: itemData, value: boolean) => void;
};

const MultiselectOption: React.FC<typeInputItem> = React.memo(({ isChecked, value, onChange }) => {
  const isObject = typeof value === 'object';

  return (
    <fieldset className="select__option">
      <input
        onChange={() => onChange(value, !isChecked)}
        id={isObject ? String(value.id) : value}
        type="checkbox"
        checked={isChecked}
      />
      <label htmlFor={isObject ? String(value.id) : value}>{isObject ? value.title : value}</label>
    </fieldset>
  );
});

const Multiselect: React.FC<MultiselectProps> = ({ data, arr, changeArr }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [defaultValue] = useState('Введите или выберите датасет');
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const onOptionChange = (item: itemData, value: boolean, index?: number) => {
    if (value) {
      changeArr([...arr, typeof item === 'object' ? { title: item.title, id: item.id } : { title: item, id: index }]);
    } else {
      const result = arr.filter((el: itemData) => el.id !== (typeof item === 'object' ? item.id : index));
      changeArr(result);
    }
  };

  return (
    <div className="select">
      <div className="select__head">
        <div className={arr.length > 2 ? 'select__wrapHeadItem select__wrapHeadItem--active' : 'select__wrapHeadItem'}>
          {arr.length > 0 ? (
            <TransitionGroup className="select__itemWrap">
              {(arr as itemData[]).map((item) => (
                <CSSTransition
                  key={String(item.id)}
                  timeout={300}
                  in={isAnimate}
                  unmountOnExit
                  mountOnEnter
                  className="select__headItemAnimate"
                  onExiting={() => setIsAnimate(true)}
                  onExited={() => setIsAnimate(false)}
                >
                  <fieldset className="select__headItem">
                    <span className="select__headItemTitle">{item.title}</span>
                    <span
                      className="select___headItemDel"
                      onClick={() => {
                        changeArr(arr.filter((el: itemData) => el.id !== item.id));
                      }}
                      aria-hidden="true"
                    />
                  </fieldset>
                </CSSTransition>
              ))}
            </TransitionGroup>
          ) : (
            <span className="select__placeholder">{defaultValue}</span>
          )}
          <span className="select__buttons">
            <span
              className="select__cleanInput"
              onClick={() => {
                changeArr([]);
              }}
              aria-hidden="true"
            />
            <span
              className={isOpen ? 'select__openSelect select__openSelect--active' : 'select__openSelect'}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
      <div className={isOpen ? 'select__body select__body--active' : 'select__body'}>
        {(data as (string | ApiData)[]).map((item, index) =>
          typeof item === 'object' ? (
            <MultiselectOption
              key={item.id}
              value={item}
              onChange={(item, value) => onOptionChange(item, value)}
              isChecked={!!arr.find((el: itemData) => el.id === item.id)}
            />
          ) : (
            <MultiselectOption
              key={String(index)}
              value={item}
              index={index}
              onChange={(item, value) => onOptionChange(item, value, index)}
              isChecked={!!arr.find((el: itemData) => el.id === index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Multiselect;
