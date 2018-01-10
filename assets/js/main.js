console.log("Hello World from main.js!");
let portfolioItems = document.querySelector(".portfolio .container");
portfolioItems.addEventListener('click', function(e) {
	if(e.target.classList.contains('image-container')) {
		e.target.classList.toggle('active');
	} else if (e.target.classList.contains('image-container') && e.target.classList.contains('active')) {
		console.log(window.location);
	}
})
portfolioItems.addEventListener('mouseover', function(e) {
	// console.log(e.target);
	if(e.target.classList.contains('image-container') && !e.target.classList.contains('active')) {
		e.target.classList.add('hover');
	} 
});
portfolioItems.addEventListener('mouseout', function(e) {
	console.log(e.target);
	if(e.target.classList.contains('image-container') && !e.target.classList.contains('active')) {
		e.target.classList.remove('hover');
	} 
});