import $ from 'jquery';

$(document).ready(function () {
  
	$('.tile').click(function(){
    console.log('hi');
    $(this).toggleClass('expand');
  });
});




