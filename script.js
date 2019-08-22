(function() {
	var upload = document.querySelector("#upload");
	var nameField = document.querySelector('.nameInput')
	let wrapper = document.querySelector('.wrapper');
	let convert = document.querySelector('.imageSection');
	function showFile() {
  		let file = upload.files[0];
  		let nameSpace = nameField.value

  		let circle = document.querySelector('.img2')
  		let name = document.querySelector('.name')

  		let reader = new FileReader()

  		reader.addEventListener('load', function () {
  			circle.src = reader.result
  			console.log(circle.src = reader.result)
  			name.innerHTML = "";
  			name.innerHTML = nameSpace

  		})

  		if (file) {
  			reader.readAsDataURL(file);
  		}
  		// domtoimage.toPng(wrapper)
		  //   .then(function (dataUrl) {
		  //       var img = new Image();
		  //       img.src = dataUrl;
		  //      convert.appendChild(img);
		  //   })
		  //   .catch(function (error) {
		  //       console.error('oops, something went wrong!', error);
		  //   });
	};
	var btn = document.querySelector('#submit')
	btn.addEventListener('click', function (event) {
		event.preventDefault();
		let formDisplay = document.querySelector('.form');
		let download = document.querySelector('.download');
		showFile()
		formDisplay.style.display = "none";
		wrapper.style.display = 'block';
	});
	var test = document.querySelector('#test')
	test.addEventListener('click', function (event) {
		var container = wrapper; // full page 
		 html2canvas(container).then(function(canvas) {
                var link = document.createElement("a");
                wrapper.appendChild(link);
                link.download = "joinme.png";
                link.href = canvas.toDataURL("image/png");
                // link.target = '_blank';
                link.click();
            });	
	})
})();