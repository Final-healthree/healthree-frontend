import React from "react";


// const promise = new Promise((resolve, reject) => {
//   console.log('doing someting...');
// })


//동기 비동기 
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {console.log(3)}, 2000);
// console.log(4);


// fetch() 동기 비동기
// console.log(1);
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// console.log(2);

// fetch로 전달된 데이터가 성공적으로 전달됐을 땐 then으로 전달된 함수가 실행되기로 약속되어 있다.
// catch는 데이터 전달이 실패했을때 실행된다.
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((result) => {
//     console.log('result', result);
//   })
//   .catch((reason) => {
//     console.log('reason', reason);
//   });

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     console.log('result', response.json());
//     response.json().then((data) => {
//       console.log('data', data)
//     })
//     return response.json();
//   })
//   .catch((reason) => {
//     console.log('reason', reason);
//   })
//   .then((data) => {
//     console.log('data',data);
//   });


  
// const promise1 = () => {
  
//   const promise = new Promise((resolve, reject) => {
//     resolve('resolved ok!');
//   });
//   promise
//     .then((data) => {
//       console.log('data', data);
//     })
//     .catch((reason) => {
//       console.log('reason', reason);
//     })
// }


  

const Detail = () => {
  return (
    <div>
      Detail
    </div>
  )
}

export default Detail;