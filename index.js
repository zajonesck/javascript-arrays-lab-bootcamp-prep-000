var kittens = ["Milo", "Otis", "Garfield"]
Function destructivelyAppendKitten(kittens, Walter) {
  kittens.unshift (Walter);
  return kittens;
}