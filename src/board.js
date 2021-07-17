const Version = "1.0";

const Names = {
  r: "車",
  n: "馬", h: "馬",
  b: "象", e: "象",
  a: "士",
  k: "將",
  c: "砲",
  p: "卒",
  x: "Ｘ",
  R: "車",
  N: "馬", H: "馬",
  B: "相", E: "相",
  A: "仕",
  K: "帥",
  C: "炮",
  P: "兵",
  X: "Ｘ",
};

const Pieces = {
  R: "RNHBEAKCPX",
  B: "rnhbeakcpx",
};

const Cols = {
  R: "九八七六五四三二一",
  B: "１２３４５６７８９",
};

const Diff = {
  R: "一二三四五六七八九",
  B: "１２３４５６７８９",
};

export default {
  version: function () {
    return Version;
  },
  side: function (code) {
    if (Pieces.R.indexOf(code) > -1) {
      return "R";
    } else if (Pieces.B.indexOf(code) > -1) {
      return "B";
    } else {
      return "N";
    }
  },
  name: function (code) {
    return Names[code] ?? "";
  },
  col: function (index) {
    return index % 9;
  },
  row: function (index) {
    return Math.trunc(index / 9);
  },
  move: function (codes, from, to) {
    let code = codes[from];
    let side = this.side(code);

    let name = this.name(code);

    let fromCol = this.col(from);
    let fromRow = this.row(from);
    let toCol = this.col(to);
    let toRow = this.row(to);
    let move = "";

    let count = 0;
    let found = 0;
    for (let row = 0; row < 10; row++) {
        let index = row * 9 + fromCol;
        if (codes[index] === code) {
            count += 1;
        }
        if (row === fromRow) {
            found = count;
        }
    }
    if (count === 1 || "abeABE".indexOf(code) > -1) {
        move += name;
        move += Cols[side][fromCol];
    } else if (count === 2) {
        let digit = (side === "B") ? "前後"[2-found] : "前後"[found-1];
        move += digit;
        move += name;
    } else if (count === 3) {
        let digit = (side === "B") ? "前中後"[3-found] : "前中後"[found-1];
        move += digit;
        move += name;
    } else if (count === 4) {
        let digit = (side === "B") ? "１２３４"[4-found] : "一二三四"[found-1];
        move += digit;
        move += name;
    } else if (count === 5) {
        let digit = (side === "B") ? "１２３４５"[5-found] : "一二三四五"[found-1];
        move += digit;
        move += name;
    }

    if (fromRow === toRow) {
        move += "平";
        move += Cols[side][toCol];
    } else {
        if (toRow > fromRow) {
            move += (side === "R") ? "退" : "進";
        } else {
            move += (side === "R") ? "進" : "退";
        }
        let diff = (Math.abs(toRow - fromRow) - 1);
        if ("abenhABENH".indexOf(code) > -1) {
          move += Cols[side][toCol];
        } else {
          move += Diff[side][diff];
        }
    }

    return move;
  },
};
