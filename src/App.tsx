/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateFromReducersMapObject } from 'redux';
import ErrorBoundary from 'src/components/ErrorBoundary';
import Multiselect from 'src/components/Multiselect/Multiselect';
// eslint-disable-next-line import/extensions
import store from 'src/store';
import { itemData } from 'src/types/itemData';
import { ApiData } from 'src/types/resources';

const Base = lazy(() => import('src/pages'));

const apiUrl =
  'https://xn--80adgxdjdid1ar3isb.xn--p1ai/api/resources?categories_like=education&audiences_like=children&_page=1';

const App: React.FC = () => {
  const [data, setData] = useState<ApiData[]>([]);
  const [currentValues, setCurrentValues] = useState<Array<ApiData>>([]);
  const [arrCurrentValues, setArrCurrentValues] = useState<Array<itemData>>([]);

  const arrData = useMemo(() => {
    return data.map((item: ApiData) => item.link);
  }, [data]);

  useEffect(() => {
    axios.get(apiUrl).then((res) => setData(res.data));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<p>Загрузка...</p>}>
            <div>
              <Multiselect data={data} arr={currentValues} changeArr={setCurrentValues} />
              <Multiselect data={arrData} arr={arrCurrentValues} changeArr={setArrCurrentValues} />
            </div>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
};

export default App;
