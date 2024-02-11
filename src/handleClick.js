//メモ

handleClick(){

setList((list) =>
list.map((v) =>
  v.tId === data.tId ? { ...data, reverse: !data.reverse } : v
)

)}

onClick={() =>
                setList((list) =>
                  list.map((v) =>
                    v.tId === data.tId ? { ...data, reverse: !data.reverse } : v
                  )
                )
              }