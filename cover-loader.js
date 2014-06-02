$.fn.coverLoader = function( options ){	
	var	self = this;
	this.__resizeLoader = function(){
		$('#'+id_loader).css({
			display: 'block',
			width: $(self).outerWidth()-2,
			height: $(self).outerHeight()-2,
			top:$(self).offset().top,
			left:$(self).offset().left,
		})
		$('#'+id_loader+'>#circleG').css({
			top:($(self).outerHeight()-2-$('#'+id_loader+'>#circleG').height())/2,
			left:($(self).outerWidth()-2-$('#'+id_loader+'>#circleG').width())/2,
		})
	}
	if( typeof options == "undefined" ){
		if( typeof this.data('attachedLoader') != 'undefined' ) return this.data('attachedLoader');
		var id_loader = 'attachedLoader'+(new Date().getTime());
		$('body').append('<div id="'+id_loader+'" class="coverLoaderHolder"><div id="circleG"><div id="circleG_1" class="circleG"></div><div id="circleG_2" class="circleG"></div><div id="circleG_3" class="circleG"></div></div></div>');
		var fnc = function(){ __resizeLoader.call(this,id_loader)};
		var sIId = setInterval( this.__resizeLoader,100);
		this.data('attachedLoader',id_loader);
		this.data('attachedLoadersIId',sIId);
		return id_loader;
	}else if( options == 'remove' ){
		if( typeof this.data('attachedLoader') != 'undefined' ){
			$('#'+this.data('attachedLoader')).remove();
			this.removeData('attachedLoader');
			if( typeof this.data('attachedLoadersIId') != 'undefined' ){
				window.clearInterval(this.data('attachedLoadersIId'));
			}
		}
		return true;
	}
}