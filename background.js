if (document.title =="Elastix") {

$('#llamada_entrante_contacto_telefono').bind('DOMNodeInserted DOMNodeRemoved DOMSubtreeModified', function(event) {
    if (event.type =='DOMNodeInserted') {
    	count =0;
		$('#elastix-callcenter-llamada-info tbody:odd tr td:odd').each(function() {
			    count+=1; 
			    var cellText = $(this).html();
			    if (count ==1) 	{firstName = $(this).html();}
			    if (count ==2) 	{lastName = $(this).html().toUpperCase();}
			    if (count ==3) 	{address = $(this).html().toUpperCase();}
			    if (count ==5) 	{city = $(this).html().toUpperCase();}
			    if (count ==6) 	{province = $(this).html().toUpperCase();}
			    if (count ==7) 	{postalCode = $(this).html().toUpperCase();}

			  // console.log(cellText,count,firstName);
				});

		//console.log(' Name: \t'+firstName+'\n Surname: \t'+lastName+'\n Address: \t'+address+', '+city+', '+province+', '+postalCode+'\n'+'Phone:'+ this.innerHTML);

	phone = this.innerHTML;

var url = "https://account.appointment-plus.com/ap/ap_admin_v2/slots_frame_v2.php?selected_appt_date=20151201&selected_start_time=660&action=makeappt&referred_by=&&first_name="+firstName+"&referred_by=&last_name="+lastName+"&address1="+address+"&city="+city+"&state="+province+"&zip="+postalCode+"&day_phone="+phone+"&selected_service_id=3312&selected_duration=60";

	$("body div").remove(".thelink");
	$("body").append('<DIV class = "thelink"> <a href="'+url+'" style="color: white" target="_NEW">BOOK APPT</a></DIV>');	


    } 


});



}
