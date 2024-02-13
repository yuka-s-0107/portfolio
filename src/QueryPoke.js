import { Button, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//1-100の乱数
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
  const [list, setList] = useState([]);

  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [isHit, setIsHit] = useState(false);

  const [open, setOpen] = useState(false);

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
    for (let i = 0; i < 5; i++) {
      searchPoke();
    }
  }, []);

  const handleClick = async (data) => {
    //表のカードは裏にしない
    if (!data.reverse) {
      return;
    }
    //結果のポップバー表示中は裏にしない
    if (open) {
      return;
    }
    //裏返す
    reverseCard(data);
    //1枚目だったらselectedに設定して処理終了
    if (!selected) {
      setSelected(data);
      return;
    }
    //2枚目だったら
    //カードの一致判定
    if (selected.id === data.id) {
      setIsHit(true);
    } else {
      setIsHit(false);
    }
    setSelected2(data);
    setOpen(true);
  };
  const reverseCard = (data, isBack = false) => {
    setList((list) =>
      list.map((v) => (v.tId === data.tId ? { ...data, reverse: isBack } : v))
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    //間違っていたら戻す(裏返す)
    if (!isHit) {
      reverseCard(selected, true);
      reverseCard(selected2, true);
    }
    setSelected(null);
    setSelected2(null);
    setOpen(false);
  };

  const action = (
    <>
      <Button size="small" onClick={handleClose}>
        OK
      </Button>
    </>
  );

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        action={action}
        message={isHit ? '正解' : '不正解'}
      />
      {[...list].map((data) => {
        return (
          <img
            key={data.tId}
            className=""
            style={{ width: 150, height: 150 }}
            src={data.revese ? '/tramp.jpg' : data?.sprites?.front_default}
            alt="pokeimg"
            onClick={() => handleClick(data)}
          />
        );
      })}
    </>
  );
}
