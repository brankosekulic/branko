	function Gallery(images){

		var that = this;

		this.images = images;
		this.currentIndex = 0;

		this.render = function(){

			var i,
				image;

			var closure = function(image, i){
				image.click(function(e){
					that.currentIndex = i;
					$('.modal-footer span').html('Photo ' + (that.currentIndex + 1) + ' of ' + images.length);
					$('#galleryModal img').attr('src', images[i]);
					$('#galleryModal').modal();
				});
			};

			$('.gallery ul').html('');

			for(i = 0; i < images.length; i++){
				image = $('<li><img src="' + images[i] + '"/></li>');
				image.appendTo('.gallery ul');

				closure(image, i);
			}

			$('.next').click(function(){
				that.next();
			});

			$('#galleryModal img').click(function(){
				that.next();
			});

			$('.prev').click(function(){
				that.prev();
			});
		};

		this.next = function(){
			var currentIndex = that.currentIndex;
			currentIndex += 1;
			if(currentIndex == images.length){
				currentIndex = 0;
			}
			$('.modal-footer span').html('Photo ' + (currentIndex + 1) + ' of ' + images.length);
			$('#galleryModal img').attr('src', images[currentIndex]);
			that.currentIndex = currentIndex;
		};

		this.prev = function(){
			var currentIndex = that.currentIndex;
			currentIndex -=1;
			if(currentIndex < 0){
				currentIndex = images.length - 1;
			}
			$('.modal-footer span').html('Photo ' + (currentIndex + 1) + ' of ' + images.length);
			$('#galleryModal img').attr('src', images[currentIndex]);
			that.currentIndex = currentIndex;
		};

		$(document).keyup(function(e){
			if($('#galleryModal').css('display') == 'block'){
				if(e.keyCode == 37 || e.keyCode == 38){
					that.prev();
				}else if(e.keyCode == 39 || e.keyCode == 40){
					that.next();
				}
			}
		});
	}

	var gallery = new Gallery([
		"/public/images/IMG_6061.JPG",
		"/public/images/IMG_6071.JPG",
		"/public/images/IMG_6072.JPG",
		"/public/images/IMG_6197.JPG",
		"/public/images/IMG_6232.JPG"]);

	if($('.gallery ul').length){
		gallery.render();
	}