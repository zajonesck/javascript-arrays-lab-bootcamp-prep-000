var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(kittens, Walter) {
  kittens.appendChild("Walter");
  return kittens;
}