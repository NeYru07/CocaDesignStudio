document.querySelectorAll('.faq-question').forEach((question) => {
	question.addEventListener('click', async () => {
	  const icon = question.querySelector('.faq-icon');
	  const answer = question.nextElementSibling;
 
	  if (!answer.classList.contains('open')) {
		 // Открытие: одновременно поворачиваем "+" и меняем на "-"
		 await rotateAndChangeIcon(icon, '+', '-');
	  } else {
		 // Закрытие: меняем "-" обратно на "+"
		 await rotateAndChangeIcon(icon, '-', '+');
	  }
 
	  // Раскрытие/скрытие текста
	  answer.classList.toggle('open');
	});
 });
 
 // Асинхронная функция для управления анимацией
 async function rotateAndChangeIcon(icon, from, to) {
	icon.style.transform = 'rotate(75deg)'; // Начинаем поворот
	await new Promise((resolve) => setTimeout(resolve, 100)); // Ждём завершения анимации (300ms)
	icon.textContent = to; // Меняем символ
	icon.style.transform = 'rotate(0deg)'; // Возвращаем в нормальное положение
 }
 
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