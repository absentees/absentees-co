document.querySelectorAll('.expand').forEach(e => {
	e.addEventListener("click", t => {
		var projectId = t.target.getAttribute("data-project");
    var screenshots = document.getElementById(projectId).querySelector('.screenshots');
    console.log(screenshots.style.display);
		if (screenshots.style.display === '') {
			screenshots.style.display = 'flex';
			t.target.innerHTML = 'Collapse';
		} else {
			screenshots.style.display = 'none';
			t.target.innerHTML = 'Expand';
		}
	});
});
