'use strict'

fetch('./data.json')
.then((response)=>{return response.json()})
.then((data)=>{
  data.forEach((el)=>{
    console.log(`Fruits: ${el.fruit}`)
  })
  const largeFruits =  data.filter((el)=>{ return el.size === 'Large'})
  largeFruits.forEach(element => {
    console.log(`large Fruits: ${element.fruit}`)
  });
  const redFruits = data.filter((el)=>{return el.color === 'Red'})

  redFruits.forEach(element => {
    console.log(`Red Fruits: ${element.fruit}`)
  });
})
  .catch((err)=>{console.log(err)})
  .finally(()=>{console.log('end')})
