function shout(string){
return string.toUpperCase()
};
shout('hello')

function whisper(string){
  return string.toLowerCase()
}
shout('HELLO')

function logShout(string){
  return console.log(string.toUpperCase())
}
logShout('hello')

function logWhisper(string){
  return console.log(string.toLowerCase())
}
logShout('Hello')

function sayHiToGrandma(string){
  if string='hello'{console.log('I can\'t hear you!')}
  else if string = 'HELLO'{console.log('YES INDEED!')}
  else if string = 'I love you, Grandma.'{console.log('I love you, too.')}
  else {console.log('invalid input')}
}
