import { useEffect, useState } from 'react';

//1-10の乱数
const getRandomValue = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
const fetchPoke = async (id = getRandomValue()) => {
  await sleep(500);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.statusText);
};

export default function QueryPoke() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const searchPoke = (id = getRandomValue()) => {
    setLoading(true);
    fetchPoke(id)
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    searchPoke();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {/* <p>{data?.name}</p> */}
      <div>
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
        {/* <p>{data?.name}</p> */}
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
      </div>
      <div>
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
        {/* <p>{data?.name}</p> */}
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
      </div>
      <div>
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
        {/* <p>{data?.name}</p> */}
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
      </div>
      <div>
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
        {/* <p>{data?.name}</p> */}
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
      </div>
      <div>
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
        {/* <p>{data?.name}</p> */}
        <img
          style={{ width: 150, height: 150 }}
          src={data?.sprites?.front_default}
          alt="pokeimg"
        />
      </div>
    </>
  );
}
