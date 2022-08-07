	$('.slider-principal').slick({
			    dots: true,
			    infinite: true,
			    speed: 300,
			    slidesToShow: 1,
			    adaptiveHeight: true,
			    autoplay: true,
			    autoplaySpeed: 2000
});

 	function allnumeric(juanburrito,burritosize)
		{
			var numbers = /^[0-9]+$/;
			if(juanburrito.value.match(numbers))
				{
				
				var tot_price=0;
			    if  (burritosize.value=="LA") {
				tot_price = 5 * juanburrito.value
				}
				if  (burritosize.value=="XL") {
				tot_price = 7.50 * juanburrito.value
				}
				if  (burritosize.value=="SU") {
				tot_price = 17 * juanburrito.value;
				alert("Warning : Supersize selected")
				}
                var divobj = document.getElementById('tot_amount');
                divobj.value = tot_price;
				alert('Your number of burritos has been accepted....');
				
				return true;
}
				else
				{
				alert('Please input numeric characters only');
				return false;
				}
}
		
		
		function calculateTotal(burritosize, juanburrito) {
			var tot_price=0;
			    if  (burritosize=="LA") {
				tot_price = 5 * juanburrito
				}
				if  (burritosize=="XL") {
				tot_price = 7.50 * juanburrito
				}
				if  (burritosize=="SU") {
				tot_price = 17 * juanburrito;
				alert("Warning: Supersize selected")
				}
                var divobj = document.getElementById('tot_amount');
                divobj.value = tot_price;
}

		function a_function()
			{
				alert("Hello! 'mextexgood’ is your november discount! Enjoy it!");
}


		function confirmLogin(){
				var name = 'luisa';
			    var num = '1234';
			    login = document.cd.login.value
			    password = document.cd.login.value

			    if ((name==login) && (num=password))
			        alert ("Welcome to Juan’s Mexican Street Food")
			    else alert ("Incorrect Login or password ")

}

