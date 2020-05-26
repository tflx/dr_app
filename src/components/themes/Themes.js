import React, {useEffect, useState} from 'react'; // eslint-disable-line no-unused-vars
import fetchIt from '../../utils/fetch';
import ThemeList from './ThemeList';
import Search from '../search/Search';
import matchSorter from 'match-sorter'
import { forceCheck } from 'react-lazyload';
import Spinner from '../spinner/Spinner';

const propTypes = {
};

const defaultProps = null;

function Themes() {
  const [fetching, setFetching] = useState(true);
  const [themes, setThemes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const themes = await fetchIt('https://www.dr.dk/mu-online-radio/api/1.0/spots/themes');
      setThemes(themes);
      setFiltered(themes);
      setFetching(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    forceCheck();
  }, [filtered])

  const handleQuery = q => {
    const filtered = matchSorter(themes, q, {keys: ['Title', 'Description', 'DisplayType']});
    setFiltered(filtered);
  }

  return (
    <section>
      {fetching ?
        <Spinner />
        :
        <React.Fragment>
          <Search handleQuery={handleQuery} />
          <ThemeList themes={filtered} />
        </React.Fragment>
      }
    </section>
  );
}

Themes.propTypes = propTypes;
Themes.defaultProps = defaultProps;

export default Themes;