import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 0,
  });

  const total = inv.books + inv.notebooks + inv.pens;

  const [totalprice, totalpricehandler] = useState(total);
  // Create add and remove functions here that changes the
  // state.

  const Bookhandle = (v) => {
    if (inv.books === 0) {
      return
    }

    setInv((prevState) => {
      return {
        books: prevState.books + v,
        notebooks: prevState.notebooks,
        pens: prevState.pens,
      };
    });
  };
  const NoteBookhandle = (v) => {
    if (inv.notebooks === 0) {
      return;
    }
    setInv((prevState) => {
      return {
        books: prevState.books,
        notebooks: prevState.notebooks + v,
        pens: prevState.pens,
      };
    });
  };
  const Penhandle = (v) => {
    if (inv.pens === 0) {
      return;
    }

    setInv((prevState) => {
      return {
        books: prevState.books,
        notebooks: prevState.notebooks,
        pens: prevState.pens + v,
      };
    });
  };

  // if(inv.books===0 || inv.notebooks===0|| inv.pens===0)
  // {
  //    return
  // }

  const totalhandler = (v) => {
    totalpricehandler(totalprice + v);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => {
            Bookhandle(1);
            totalhandler(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            Bookhandle(-1);
            totalhandler(-1);
          }}
        >
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            NoteBookhandle(1);
            totalhandler(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            NoteBookhandle(-1);
            totalhandler(-1);
          }}
        >
          -
        </button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button
          className="circlularButton"
          onClick={() => {
            Penhandle(1);
            totalhandler(1);
          }}
        >
          +
        </button>
        <button
          className="circlularButton"
          onClick={() => {
            Penhandle(-1);
            totalhandler(-1);
          }}
        >
          -
        </button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {totalprice}
    </div>
  );
};
