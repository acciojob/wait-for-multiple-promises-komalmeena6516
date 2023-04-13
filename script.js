//your JS code here. If required.
const tBody = document.getElementById('output')

const promises = [
  new Promise((resolve, reject) => {
    const time = Math.floor(Math.random()*3+1)*1000;
    setTimeout(() => {
      resolve({name:"Promise 1", time: time/1000})
    }, time);
  }),
  new Promise((resolve, reject) => {
    const time = Math.floor(Math.random()*3+1)*1000;
    setTimeout(() => {
      resolve({name:"Promise 2", time: time/1000})
    }, time);
  }),
  new Promise((resolve, reject) => {
    const time = Math.floor(Math.random()*3+1)*1000;
    setTimeout(() => {
      resolve({name:"Promise 3", time: time/1000})
    }, time);
  }),
];


async function Allfunc(){
const start = new Date();

tBody.innerHTML += `
<tr id="loading">
  <td colspan=2>Loading...</td>
  </tr>
  `;

  await Promise.all(promises)
  .then((result)=>{
    tBody.innerHTML = ``;
    //result is a output of all promises in array form
    //use foreach to iterate and add result at table the 
    result.forEach((e)=>{
      tBody.innerHTML +=`
      <tr>
                <td>${e.name}</td>
                <td>${e.time}</td>
            </tr>
      `;
    });

  }).catch((error)=>{
    console.log(error);
  });

  const end = new Date();
  const milliTime = end-start;
  tBody.innerHTML += `
  <tr>
                <td>Total</td>
                <td>${milliTime/ 1000}</td>
            </tr>
  `;
}

Allfunc();