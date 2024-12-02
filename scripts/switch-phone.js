document.getElementById("country").addEventListener("change", function () {
	const phoneInput = document.getElementById("phone");
	
	// Меняем placeholder в зависимости от выбранного значения
	if (this.value === "RU") {
	  phoneInput.placeholder = "+7 (000) 000-00-00";
	} else if (this.value === "US") {
	  phoneInput.placeholder = "+1 (555) 000-0000";
	}
 });