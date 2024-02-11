import { List } from '@mui/material';
import { useDebugValue, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

export default function QueryPoke() {
  const [id, setId] = useState(1);
  const [reverse, setReverse] = useState(true);
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

  const [selectedCards, setSelectedCards] = useState([]);
  const [isMatched, setIsMatched] = useState(false);
  const [isMatched2, setIsMatched2] = useState(false);
  const [isMatched3, setIsMatched3] = useState(false);
  const [isMatched4, setIsMatched4] = useState(false);
  const [isMatched5, setIsMatched5] = useState(false);
  const [isMatched6, setIsMatched6] = useState(false);
  const [isMatched7, setIsMatched7] = useState(false);
  const [isMatched8, setIsMatched8] = useState(false);
  const [isMatched9, setIsMatched9] = useState(false);
  const [isMatched10, setIsMatched10] = useState(false);

  function shuffle(array) {
    return [...array].toSorted(() => Math.random() - 0.5);
  }

  const searchPoke = (id = getRandomValue()) => {
    setLoading(true);
    fetchPoke(id)
      .then((result) => {
        result.reverse = true;
        setList((data) => [...data, { ...result, tId: uuidv4() }]);
        setList((data) => [...data, { ...result, tId: uuidv4() }]);
        setList((data) => shuffle(data));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    searchPoke();
    searchPoke();
    searchPoke();
    searchPoke();
    searchPoke();
    searchPoke();
    searchPoke();
    searchPoke();
    searchPoke();
    searchPoke();
  }, []);

  const handleClick = () => {
    // setList((list) =>
    //   list.map((v) =>
    //     v.tId === data.tId ? { ...data, reverse: !data.reverse } : v
    //   )
    // );
    setSelectedCards([...selectedCards, list]);
  };
  useEffect(() => {
    if (selectedCards.length === 2) {
      checkMatch();
    }
  }, [selectedCards]);

  const checkMatch = () => {
    if (selectedCards[0].id === selectedCards[1].id) {
      list.map((v) => {
        if (v.id === selectedCards[0].id) {
          return { ...List, isMatched: true };
        }
        return list;
      });

      console.log('マッチ');
    } else {
      console.log('notマッチ');
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {[...list.slice(0, 20)].map((data) => {
        return (
          // <img
          //   key={data.tId}
          //   className=""
          //   style={{ width: 250, height: 250 }}
          //   src={data?.sprites?.front_default}
          //   alt="pokeimg"
          //   selectedCards={selectedCards}
          //   setSelectedCards={setSelectedCards}
          //   onClick={handleClick}
          // />
          <img
            key={data.tId}
            className=""
            style={{ width: 150, height: 150 }}
            src={data.reverse ? '/tramp.jpg' : data?.sprites?.front_default}
            alt="pokeimg"
            selectedCards={selectedCards}
            setSelectedCards={setSelectedCards}
            onClick={handleClick}
          />
        );
      })}
    </>
  );
}

// return (
//   <>
//     {[...list.slice(0, 20)].map((data) => {
//       return (
//         <img
//           key={data.tId}
//           className=""
//           style={{ width: 150, height: 150 }}
//           src={data.reverse ? '/tramp.jpg' : data?.sprites?.front_default}
//           alt="pokeimg"
//           onClick={() =>
//             setList((list) =>
//               list.map((v) =>
//                 v.tId === data.tId ? { ...data, reverse: !data.reverse } : v
//               )
//             )
//           }
//         />
//       );
//     })}
//   </>
// );
