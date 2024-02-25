<script>
function convertNumberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
function checkIsFloat(x){
	return Number(x) === x && x % 1 !== 0;
};
function checkIsInt(x){
	return Number(x) === x && x % 1 === 0;
};
function countDecimals(x) {
	var split = x.toString().split('.');

	return (split[1]) ? split[1].length : 0; 
};

export function animateNumber() {
	var elms = [].slice.call(document.querySelectorAll('[data-animation]'));
	if (elms) {
		elms.map(function(elm) {
			var targetAnimate = elm.getAttribute('data-animation');
			var targetValue = elm.getAttribute('data-value');
			
			switch (targetAnimate) {
				case 'width':
					setTimeout(() => {
						elm.style.width = targetValue;
					}, 250);
					break;
				case 'height':
					setTimeout(() => {
						elm.style.height = targetValue;
					}, 250);
					break;
				case 'number':
					var targetElm = elm;
					var decimal = countDecimals(targetValue);
					var divide = 1;
					var x = decimal;
					while (x > 0) {
						divide *= 10;
						x--;
					}
			
					const animate = () => {
						const value = +(targetValue.replace(',', ''));
						const data = +((targetElm.count) ? targetElm.count : 0);
						const time = value / 300;
				
						if (data < value) {
							var targetText = data + time;
							targetElm.innerText = convertNumberWithCommas((targetText).toFixed(decimal));
							targetElm.count = targetText;
							setTimeout(animate, 1);
						} else {
							targetElm.innerText = convertNumberWithCommas(value);
						}
					}
					animate();
					break;
				case 'class':
					elm.classList.add(targetValue);
					break;
			}
		});
	}
}
</script>