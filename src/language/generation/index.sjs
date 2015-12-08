// # module: siren.language.generation
//
// Exposes a way of generating JS from Siren ASTs.

// -- Dependencies -----------------------------------------------------
var { BindingBox, generate } = require('./codegen');
var resolveBindings = require('./resolve-bindings');

// -- Exports ----------------------------------------------------------
module.exports = function(ast, knownNames) {
  return resolveBindings(knownNames, ast)
      |> λ[generate(new BindingBox(), #)];
}
