function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  const spy= string.toUpperCase
  console.log(spy)

}
logShout('HELLO')
