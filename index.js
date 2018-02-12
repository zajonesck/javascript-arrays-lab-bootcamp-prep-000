var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(kittens, Walter) {
  kittens.unshift (Walter);
  return kittens;
}