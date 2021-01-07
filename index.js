function writeCards(names, event) {
  let out = []
  for (let i = 0; i < names.length; i++) {
    out.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return out
}

function countDown(num) {
  while(num >= 0){
    console.log(num)
    num--
  }
}