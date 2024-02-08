import { List } from '@mui/material';
import { useDebugValue, useEffect, useState } from 'react';

//乱数
const getRandomValue = () => {
  return Math.floor(Math.random() * 99) + 1;
};

const fetchPoke = async (id = getRandomValue()) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.statusText);
};

// const searchAllPoke = () => {
//   return Promise.all([
//     fetchPoke(),
//     fetchPoke(),
//     fetchPoke(),
//     fetchPoke(),
//     fetchPoke(),
//     fetchPoke(),
//     fetchPoke(),
//     fetchPoke(),
//     fetchPoke(),
//     fetchPoke(),
//   ]);
// };

// const [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10] =
//   await searchAllPoke();
//   console.log('search',data1)
//   console.log('search',data2)

export default function QueryPoke() {
  const [id, setId] = useState(1);
  const [reverse1, setReverse1] = useState(true);
  const [reverse2, setReverse2] = useState(true);
  const [reverse3, setReverse3] = useState(true);
  const [reverse4, setReverse4] = useState(true);
  const [reverse5, setReverse5] = useState(true);
  const [reverse6, setReverse6] = useState(true);
  const [reverse7, setReverse7] = useState(true);
  const [reverse8, setReverse8] = useState(true);
  const [reverse9, setReverse9] = useState(true);
  const [reverse10, setReverse10] = useState(true);

  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null);
  const [data7, setData7] = useState(null);
  const [data8, setData8] = useState(null);
  const [data9, setData9] = useState(null);
  const [data10, setData10] = useState(null);

  const [list, setList] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const searchPoke = (setDataFunc, id = getRandomValue()) => {
    setLoading(true);
    fetchPoke(id)
      .then((result) => {
        result.reverse = true;
        result.tId = `${result.id}-1`;
        console.log(result);
        //setDataFunc(result);
        setList((data) => [...data, { ...result, tId: `${result.id}-1` }]);
        result.tId = `${result.id}-2`;
        setList((data) => [...data, { ...result, tId: `${result.id}-2` }]);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  function shuffle() {
    for (const [index] of list.entries()) {
      const tempIndex = Math.floor(Math.random() * list.length);
      const tempNum = list[index];
      list[index] = list[tempIndex];
      list[tempIndex] = tempNum;
    }
  }
  console.log('aaa');

  EventTarget.addEventListener(onselect, shuffle, { once: true });

  // for (let i = 0; i < 1; i++) {
  //   shuffle();
  //   if (i === 1) {
  //     break;
  //   }console.log('aaa');
  // }

  useEffect(() => {
    searchPoke(setData);
    searchPoke(setData2);
    searchPoke(setData3);
    searchPoke(setData4);
    searchPoke(setData5);
    searchPoke(setData6);
    searchPoke(setData7);
    searchPoke(setData8);
    searchPoke(setData9);
    searchPoke(setData10);

    //   await searchAllPoke()
    //   =searchAllPoke()
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
      {[...list.slice(0, 20)].map((data) => {
        return (
          <img
            className=""
            style={{ width: 150, height: 150 }}
            src={data.reverse ? '/tramp.jpg' : data?.sprites?.front_default}
            alt="pokeimg"
            onClick={() =>
              setList((list) =>
                list.map((v) =>
                  v.tId === data.tId ? { ...data, reverse: !data.reverse } : v
                )
              )
            }
          />
        );
      })}

      {/* <p>{data?.name}</p>
      <img
        style={{ width: 150, height: 150 }}
        src={reverse2 ? '/tramp.jpg' : data?.sprites?.front_default}
        alt="pokeimg"
        onClick={() => setReverse2(!reverse2)}
      /> */}
    </>
  );
}
