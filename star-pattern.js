let n = 3;
let num = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}

// 1 2 3
// 4 5 6
// 7 8 9
// *******************************************************************

let chr = 65;
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n; j++) {
    row += String.fromCharCode(chr) + " ";
    chr++;
  }
  console.log(row);
}

// A B C
// D E F
// G H I
// *********************************************************************
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}

// 1
// 22
// 333
// *********************************************************************
//  let chr=65;
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(chr);
  }
  chr++;
  console.log(row);
}
// A
// BB
// CCC
// **********************************************************************

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = i; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}
// 1
// 21
// 321
// ********************************************************************

let nu = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += nu;
    nu++;
  }
  console.log(row);
}
// 1
// 23
// 456
// ********************************************************************
// let chr=65;
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(chr);
    chr++;
  }
  console.log(row);
}
// A
// BC
// DEF
// ******************************************************************
// let n=4;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += " ";
  }
  for (let j = n; j >= i; j--) {
    row += i;
  }
  console.log(row);
}
//  1111
//   222
//    33
//     4
// *******************************************************************
// let n=4;
// let chr=65;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += " ";
  }
  for (let j = n; j >= i; j--) {
    row += String.fromCharCode(chr);
  }
  chr++;
  console.log(row);
}
//  AAAA
//   BBB
//    CC
//     D
// *******************************************************************
// let n=4;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = i; j <= n - 1; j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  for (let j = i - 1; j >= 1; j--) {
    row += "*";
  }
  console.log(row);
}
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = i; j <= n - 1; j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  for (let j = i - 1; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}
//    *
//   ***
//  *****
// *******
//    1
//   121
//  12321
// 1234321
// *************************************************************************
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += " ";
  }
  for (let j = n; j >= i; j--) {
    row += "*";
  }
  for (let j = i; j <= n - 1; j++) {
    row += "*";
  }
  console.log(row);
}
//  *******
//   *****
//    ***
//     *
// ****************************************************************************
