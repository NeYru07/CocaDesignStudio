document.querySelectorAll('.faq-question').forEach((el) => {
	el.addEventListener('click', () => {
		 let content = el.nextElementSibling;
		 let icon = el.querySelector('.faq-icon');

		 if (content.style.maxHeight) {

			  document.querySelectorAll('.faq-answer').forEach((answer) => answer.style.maxHeight = null);

			  document.querySelectorAll('.faq-icon').forEach((icon) => icon.textContent = "+");
		 } else {

			  document.querySelectorAll('.faq-answer').forEach((answer) => answer.style.maxHeight = null);

			  document.querySelectorAll('.faq-icon').forEach((icon) => icon.textContent = "+");

			  content.style.maxHeight = content.scrollHeight + 'px';
			  icon.textContent = "-";
		 }
	});
});

 
//  Смена цен
 document.getElementById('pricing-toggle-checkbox').addEventListener('change', function (event) {
	const isAnnual = event.target.checked;
 
	// Цены для ежемесячной и ежегодной подписок
	const monthlyPrices = [100, 140, 210];
	const annualPrices = [1000, 1400, 2100];
	const month = '/mo';
	const year = '/ye'
 
	// Обновляем цены в зависимости от состояния переключателя
	document.querySelectorAll('.pricing-card').forEach((card, index) => {
	  const priceElement = card.querySelector('.price-value');
	  const periodElement = card.querySelector('.period');
	  console.log(periodElement);
	  priceElement.textContent = isAnnual ? `$${annualPrices[index]}` : `$${monthlyPrices[index]}`;
	  periodElement.textContent = isAnnual ? `$${year}` : `$${month}`;
	});
 });