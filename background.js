if (window.location.href =="https://192.168.3.20/index.php?menu=agent_console") {

$('#llamada_entrante_contacto_telefono').bind('DOMNodeInserted DOMNodeRemoved DOMSubtreeModified', function(event) {
    if (event.type =='DOMNodeInserted') {
    	count =0;
		$('#elastix-callcenter-llamada-info tbody:odd tr td:odd').each(function() {
			    count+=1; 
			    var cellText = $(this).html();
			    if (count ==1) 	{firstName = $(this).html();}
			    if (count ==2) 	{lastName = $(this).html().toUpperCase();}
			    if (count ==3) 	{address = $(this).html().toUpperCase();}
			    if (count ==4) 	{city = $(this).html().toUpperCase();}
			    if (count ==5) 	{province = $(this).html().toUpperCase();}
			    if (count ==6) 	{postalCode = $(this).html().toUpperCase();}

			  // console.log(cellText,count,firstName);
				});

		//console.log(' Name: \t'+firstName+'\n Surname: \t'+lastName+'\n Address: \t'+address+', '+city+', '+province+', '+postalCode+'\n'+'Phone:'+ this.innerHTML);

		url = "https://account.appointment-plus.com/ap/ap_admin_v2/slots_frame_v2.php?wait_id=&emp_type_id=&vp_appt_date=20151121&selected_appt_date=20151121&selected_start_time=660&action=makeappt&selected_e_id=2275&vp_e_id=2275&selected_r_id=&e_id=2275&selected_service_id=&vp_service_id=all&vp_service_id_search=vp_service_id_search&next_open_duration=&next_date=20151122&prev_date=20151120&view=day&selected_customer_id=&search_customer_name="+firstName+"&referred_by=NICK&last_name="+lastName+"&address1="+address+"&city="+city+"&state="+province+"&zip="+postalCode+"&day_phone="+this.innerHTML;

	$("body div").remove(".thelink");
	$("body").append('<DIV class = "thelink"> <a href="'+url+'" style="color: white" target="_NEW">BOOK APPT</a></DIV>');	


    } 


});



}
