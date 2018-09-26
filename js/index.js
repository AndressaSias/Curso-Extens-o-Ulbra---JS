function render(state) {

  var { category, cart, products } = state;

  const $menu = document.querySelector('#js-menu');
  const $sacola = document.querySelector('#js-sacola');
  const $produtos = document.querySelector('#js-produtos');

  renderMenu($menu , category);
  renderSacola($sacola, cart);
  renderProdutos($produtos, products);

}

render(initialState);