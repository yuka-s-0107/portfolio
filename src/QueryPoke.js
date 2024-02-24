import { Button, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PAIR_COUNT = 5;

//1-100の乱数
const getRandomValue = () => {
  return Math.floor(Math.random() * 99) + 1;
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
  const [list, setList] = useState([]); //ポケモンカード一覧。

  //1枚目の選択
  const [selected, setSelected] = useState(null);
  //2枚目の選択
  const [selected2, setSelected2] = useState(null);
  const [isHit, setIsHit] = useState(false);

  //setOpenをtrueにしたら「正解/不正解」のモーダル表示
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
        setList((data) => [...data, { ...result, tId: uuidv4() }]); //Listにカードを追加。同じidのポケモン2匹を呼ぶ。tIdで2匹を識別。
        setList((data) => [...data, { ...result, tId: uuidv4() }]);
        setList((data) => shuffle(data)); //Listに入れてすぐのタイミングでシャッフルを起動。
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    for (let i = 0; i < PAIR_COUNT; i++) {
      searchPoke();
    }
  }, []);

  const handleClick = async (data) => {
    //すでにめくられたカードは裏にしない
    if (!data.reverse) {
      return;
    }
    //結果のポップバー表示中は裏にしない
    if (open) {
      return;
    }
    //裏返す
    reverseCard(data); //1枚目のをSelected2に入れる。後々元に戻すのに使う。
    //1枚目だったらselectedに設定して処理終了(JSはnullならfalseが返される)
    if (selected === null) {
      setSelected(data); //selectedにカードが入った。
      return;
    }
    //2枚目だったら（1枚目が埋まっていたら）
    //カードの一致判定（selectedが1枚目、dataが2枚目）
    if (selected.id === data.id) {
      setIsHit(true);
    } else {
      setIsHit(false);
    }
    setSelected2(data); //2枚目のをSelected2に入れる。
    setOpen(true); //Snackbarを出す。
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
    setSelected(null); //今までにめくった分をnullで初期化
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

      {/* listの中身展開 */}
      {[...list].map((data) => {
        return (
          <img
            key={data.tId}
            className=""
            style={{ width: 150, height: 150 }}
            src={data.reverse ? '/tramp.jpg' : data?.sprites?.front_default} //reverseの中身がtrueなら裏、falseならポケモン。
            alt="pokeimg"
            onClick={() => handleClick(data)}
          />
        );
      })}
    </>
  );
}
