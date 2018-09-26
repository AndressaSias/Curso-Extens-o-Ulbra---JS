;(function() {

  // modalzinhos
  ;(function() {
    const $domSacola = document.querySelector('#js-sacola');
    const $domFinalizar = document.querySelector('#js-finalizar-carrinho');
    const $domPagamento = document.querySelector('#js-pagamento');
    const $domPagamentoFechar = document.querySelector('#js-pagamento-fechar');

    $domSacola.addEventListener('click', () => {
      document.body.classList.toggle('on');
    });

    $domFinalizar.addEventListener('click', () => {
      $domPagamento.classList.add('opened');
    });

    $domPagamentoFechar.addEventListener('click', () => {
      $domPagamento.classList.remove('opened');
    });
  })();



  const closest = (el, selector) => {
    var parent = el.parentNode;
    if (el.matches(selector)) {
      return el;
    }
    while (parent && parent !== document.body) {
      if (parent.matches && parent.matches(selector)) {
        return parent;
      } else if (parent.parentNode) {
        parent = parent.parentNode;
      } else {
        return null;
      }
    }
    return null;
  };

  const eachChild = (el, callback) => {
    var i = 0;
    var l = el.children.length;
    while (i < l) {
      callback(el.children[i], i);
      i += 1;
    }
  };

  const removeChildren = parent => {
    var node = parent;
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  const currency = v => {
    const value = Number(v).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\b)/g, "$1.");
    return `R$ ${value}`;
  };


  const splitEvery = (list, n) => {
    const result = [];
    let idx = 0;
    while (idx < list.length) {
      result.push(list.slice(idx, idx += n, list));
    }
    return result;
  }

  window._ = {
    closest: closest,
    eachChild: eachChild,
    removeChildren: removeChildren,
    splitEvery: splitEvery,
    currency: currency
  };
})();


