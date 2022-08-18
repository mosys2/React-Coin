import React, { useEffect, useState } from 'react'
import { api } from '../../services/api';
import LoadingBar from 'react-top-loading-bar';
import { Container, Row } from 'react-bootstrap';
import styles from './dashboard.module.css'
import Coins from '../coins';

export const Dashbord = () => {
  const [fetchApi, setFecthApi] = useState([]);
  const [progress, setProgress] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApiAll = async () => {
      const data = await api();
      setFecthApi(data);
      setProgress(100);
      console.log(data)

    }
    fetchApiAll();

  }, []);

  const searchHandler = event => { setSearch(event.target.value) }
  const searchCoins = fetchApi.filter(x =>
    x.name.toLowerCase()
      .includes(search.toLocaleLowerCase()));

  return (

    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
      />
      <Container>
        <input type="text" placeholder='search...' onChange={searchHandler} className={styles.search}></input>
        <Row>
          {
            <ul className={styles.list}>
              {searchCoins.map((item, index) => <Coins
                id={item.id}
                image={item.image}
                symbol={item.symbol}
                price={item.current_price}
                marketCap={item.market_cap}
                priceChange={item.price_change_percentage_24h}
              />

              )}
            </ul>
          }
        </Row>
      </Container>
    </>
  )
}
