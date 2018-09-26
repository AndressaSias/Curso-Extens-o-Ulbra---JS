function createProductParent() {
	const dom = document.createElement('div');
	dom.className = 'items';
	return dom;
}

function createProduct(item) {
	const dom = document.createElement('div');
	dom.className = 'item';
	const lastPrice = (item.price * (item.off/100)) + item.price;
	const isChecked = item.isChecked ? 'btn--active' : '';
	dom.innerHTML = `
		<div class="item__images">
			<div class="photo__flip">
				<div class="photo__front">
					<img src="img/${item.images[0]}" alt="${item.name} foto 1">
				</div>
				<div class="photo__back">
					<img src="img/${item.images[1]}" alt="${item.name} foto 2">
				</div>
			</div>
		</div>
		<div class="item__content">
			<div class="item__head">
				<span>${item.category}</span>
				<span class="off">-${item.off}%</span>
			</div>
			<div class="item__info">
				<h2>${item.name}</h2>
				<h3><small>${_.currency(lastPrice)}</small> <strong>${_.currency(item.price)}</strong></h3>
			</div>
			<div class="item__action">
				<button class="btn"><svg class="icon-fav" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="510px" height="510px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve"> <g> <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55 C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/> </g> </svg></button>
				<button class="btn js-check ${isChecked}" data-id="${item.id}">Adicionar</button>
			</div>
		</div>
	`;
	return dom;
}






