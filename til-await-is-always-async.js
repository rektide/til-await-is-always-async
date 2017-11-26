#!/usr/bin/env node
/**
  We learn that await always defers execution,
  even when it has a resolved value.
*/
async function identityFunctionAsync( a){
	console.log(await a)
}
/**
  We learn that async functions are executed synchronously-
  It is only when they use await that they defer execution
*/
async function identityFunction( a){
	console.log( a)
}

console.log( "1 - start identity")
identityFunction( "identity")
console.log("2 - start async")
identityFunctionAsync( "async")
console.log( "3 - done")
