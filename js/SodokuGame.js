
function check(){
	var row1_1 = document.getElementById('row1-1').value;
	var row1_2 = document.getElementById('row1-2').value;
	var row1_3 = document.getElementById('row1-3').value;
	var row1_4 = document.getElementById('row1-4').value;
	var row1_5 = document.getElementById('row1-5').value;
	var row1_6 = document.getElementById('row1-6').value;
	var row1_7 = document.getElementById('row1-7').value;
	var row1_8 = document.getElementById('row1-8').value;
	var row1_9 = document.getElementById('row1-9').value;

	var row2_1 = document.getElementById('row2-1').value;
	var row2_2 = document.getElementById('row2-2').value;
	var row2_3 = document.getElementById('row2-3').value;
	var row2_4 = document.getElementById('row2-4').value;
	var row2_5 = document.getElementById('row2-5').value;
	var row2_6 = document.getElementById('row2-6').value;
	var row2_7 = document.getElementById('row2-7').value;
	var row2_8 = document.getElementById('row2-8').value;
	var row2_9 = document.getElementById('row2-9').value;

	var row3_1 = document.getElementById('row3-1').value;
	var row3_2 = document.getElementById('row3-2').value;
	var row3_3 = document.getElementById('row3-3').value;
	var row3_4 = document.getElementById('row3-4').value;
	var row3_5 = document.getElementById('row3-5').value;
	var row3_6 = document.getElementById('row3-6').value;
	var row3_7 = document.getElementById('row3-7').value;
	var row3_8 = document.getElementById('row3-8').value;
	var row3_9 = document.getElementById('row3-9').value;

	var row4_1 = document.getElementById('row4-1').value;
	var row4_2 = document.getElementById('row4-2').value;
	var row4_3 = document.getElementById('row4-3').value;
	var row4_4 = document.getElementById('row4-4').value;
	var row4_5 = document.getElementById('row4-5').value;
	var row4_6 = document.getElementById('row4-6').value;
	var row4_7 = document.getElementById('row4-7').value;
	var row4_8 = document.getElementById('row4-8').value;
	var row4_9 = document.getElementById('row4-9').value;

	var row5_1 = document.getElementById('row5-1').value;
	var row5_2 = document.getElementById('row5-2').value;
	var row5_3 = document.getElementById('row5-3').value;
	var row5_4 = document.getElementById('row5-4').value;
	var row5_5 = document.getElementById('row5-5').value;
	var row5_6 = document.getElementById('row5-6').value;
	var row5_7 = document.getElementById('row5-7').value;
	var row5_8 = document.getElementById('row5-8').value;
	var row5_9 = document.getElementById('row5-9').value;

	var row6_1 = document.getElementById('row6-1').value;
	var row6_2 = document.getElementById('row6-2').value;
	var row6_3 = document.getElementById('row6-3').value;
	var row6_4 = document.getElementById('row6-4').value;
	var row6_5 = document.getElementById('row6-5').value;
	var row6_6 = document.getElementById('row6-6').value;
	var row6_7 = document.getElementById('row6-7').value;
	var row6_8 = document.getElementById('row6-8').value;
	var row6_9 = document.getElementById('row6-9').value;

	var row7_1 = document.getElementById('row7-1').value;
	var row7_2 = document.getElementById('row7-2').value;
	var row7_3 = document.getElementById('row7-3').value;
	var row7_4 = document.getElementById('row7-4').value;
	var row7_5 = document.getElementById('row7-5').value;
	var row7_6 = document.getElementById('row7-6').value;
	var row7_7 = document.getElementById('row7-7').value;
	var row7_8 = document.getElementById('row7-8').value;
	var row7_9 = document.getElementById('row7-9').value;

	var row8_1 = document.getElementById('row8-1').value;
	var row8_2 = document.getElementById('row8-2').value;
	var row8_3 = document.getElementById('row8-3').value;
	var row8_4 = document.getElementById('row8-4').value;
	var row8_5 = document.getElementById('row8-5').value;
	var row8_6 = document.getElementById('row8-6').value;
	var row8_7 = document.getElementById('row8-7').value;
	var row8_8 = document.getElementById('row8-8').value;
	var row8_9 = document.getElementById('row8-9').value;

	var row9_1 = document.getElementById('row9-1').value;
	var row9_2 = document.getElementById('row9-2').value;
	var row9_3 = document.getElementById('row9-3').value;
	var row9_4 = document.getElementById('row9-4').value;
	var row9_5 = document.getElementById('row9-5').value;
	var row9_6 = document.getElementById('row9-6').value;
	var row9_7 = document.getElementById('row9-7').value;
	var row9_8 = document.getElementById('row9-8').value;
	var row9_9 = document.getElementById('row9-9').value;


	if (row1_2 == row1_1 && row1_2 != "" || row1_2 == row1_3 && row1_2 != "" || row1_2 == row1_4 && row1_2 != ""|| row1_2 == row1_6 && row1_2 != "" ||
	 		row1_2 == row1_7 && row1_2 != "" || row1_2 == row1_9 && row1_2 != "" || row1_2 == row3_1 && row1_2 != "" || row1_2 == row2_3 && row1_2 != ""){
			let x = document.getElementById('row1-2').style.background = "red";
			let y = document.getElementById('row1-2').style.borderColor = "red";

	}
	
	else if(row1_2 == ""){
		let a = document.getElementById('row1-2').style.background = "white";
		let b = document.getElementById('row1-2').style.borderColor = "white";
	}
	else
	{
		let a = document.getElementById('row1-2').style.background = "white";
		let b = document.getElementById('row1-2').style.borderColor = "white";
	}
	
	if (row1_5 == row1_1 && row1_5 != "" || row1_5 == row1_2 && row1_5 != "" || row1_5 == row1_3 && row1_5 != "" || row1_5 == row1_4 && row1_5 != ""|| row1_5 == row1_6 && row1_5 != "" 
			|| row1_5 == row1_7 && row1_5 != "" || row1_5 == row1_9 && row1_5 != "" || row1_5 == row4_5 && row1_5 != "" || 
			row1_5 == row7_5 && row1_5 != "" || row1_5 == row8_5 && row1_5 != "" ||  row1_5 == row2_6 && row1_5 != ""){
			let x = document.getElementById('row1-5').style.background = "red";
			let y = document.getElementById('row1-5').style.borderColor = "red";

	}
	
	else if(row1_5 == ""){
		    let a = document.getElementById('row1-5').style.background = "white";
			let b = document.getElementById('row1-5').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row1-5').style.background = "white";
			let b = document.getElementById('row1-5').style.borderColor = "white";
	}

	if (row1_8 == row1_1 && row1_8 != "" || row1_8 == row1_2 && row1_8 != "" || row1_8 == row1_3 && row1_8 != "" || row1_8 == row1_4 && row1_8 != "" || 
			row1_8 == row1_5 && row1_8 != "" || row1_8 == row1_6 && row1_8 != "" || row1_8 == row1_7 && row1_8 != "" ||
			row1_8 == row1_9 && row1_8 != "" || row1_8 == row2_9 && row1_8 != "" || row1_8 == row3_9 && row1_8 != ""){
			let x = document.getElementById('row1-8').style.background = "red";
			let y = document.getElementById('row1-8').style.borderColor = "red";

	}
	
	else if(row1_8 == ""){
			let a = document.getElementById('row1-8').style.background = "white";
			let b = document.getElementById('row1-8').style.borderColor = "white";
	}
	else
	{
			let a = document.getElementById('row1-8').style.background = "white";
			let b = document.getElementById('row1-8').style.borderColor = "white";
	}

	if (row2_1 == row2_3 && row2_1 != "" || row2_1 == row1_1 && row2_1 != "" || row2_1 == row2_6 && row2_1 != "" || row2_1 == row2_9 && row2_1 != "" || 
		row2_1 == row3_1 && row2_1 != "" || row2_1 == row4_1 && row2_1 != "" || row2_1 == row6_1 && row2_1 != "" ||
		row2_1 == row7_1 && row2_1 != "" || row2_1 == row9_1 && row2_1 != "" || row2_1 == row1_2 && row2_1 != "" ||  row2_1 == row1_3 && row2_1 != ""){
			let x = document.getElementById('row2-1').style.background = "red";
			let y = document.getElementById('row2-1').style.borderColor = "red";

	}
	else if (row2_1 == ""){
			let a = document.getElementById('row2-1').style.background = "white";
			let b = document.getElementById('row2-1').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row2-1').style.background = "white";
			let b = document.getElementById('row2-1').style.borderColor = "white";
	}

	if (row2_2 == row2_1 && row2_2 != "" || row2_2 == row2_3 && row2_2 != "" || row2_2 == row2_6 && row2_2 != "" || 
		row2_2 == row2_9 && row2_2 != "" || row2_2 == row1_2 && row2_2 != "" || row2_2 == row1_1 && row2_2 != "" || 
		row2_2 == row1_3 && row2_2 != "" || row2_2 == row3_1 && row2_2 != ""){
			let x = document.getElementById('row2-2').style.background = "red";
			let y = document.getElementById('row2-2').style.borderColor = "red";

	}
	else if (row2_2 == ""){
			let a = document.getElementById('row2-2').style.background = "white";
			let b = document.getElementById('row2-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row2-2').style.background = "white";
			let b = document.getElementById('row2-2').style.borderColor = "white";
	}

	if (row2_4 == row2_1 && row2_4 != "" || row2_4 == row2_2 && row2_4 != "" || row2_4 == row2_3 && row2_4 != "" || row2_4 == row2_6 && row2_4 != "" ||
			row2_4 == row2_9 && row2_4 != "" || row2_4 == row1_4 && row2_4 != "" || row2_4 == row6_4 && row2_4 != "" || 
			row2_4 == row9_4 && row2_4 != "" || row2_4 == row1_5 && row2_4 != "" || row2_4 == row1_6 && row2_4 != ""){
			let x = document.getElementById('row2-4').style.background = "red";
			let y = document.getElementById('row2-4').style.borderColor = "red";

	}
	
	else if(row2_4 == ""){
			let a = document.getElementById('row2-4').style.background = "white";
			let b = document.getElementById('row2-4').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row2-4').style.background = "white";
			let b = document.getElementById('row2-4').style.borderColor = "white";
	}

	if (row2_5 == row2_1 && row2_5 != "" || row2_5 == row2_2 && row2_5 != "" || row2_5 == row2_3 && row2_5 != "" || row2_5 == row2_4 && row2_5 != "" ||
			row2_5 == row2_6 && row2_5 != "" || row2_5 == row2_9 && row2_5 != "" || row2_5 == row1_5 && row2_5 != "" || row2_5 == row4_5 && row2_5 != "" ||
			row2_5 == row7_5 && row2_5 != "" || row2_5 == row8_5 && row2_5 != "" || row2_5 == row1_4 && row2_5 != "" || row2_5 == row1_6 && row2_5 != ""){
			let x = document.getElementById('row2-5').style.background = "red";
			let y = document.getElementById('row2-5').style.borderColor = "red";

	}
	
	else if (row2_5 == ""){
			let a = document.getElementById('row2-5').style.background = "white";
			let b = document.getElementById('row2-5').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row2-5').style.background = "white";
			let b = document.getElementById('row2-5').style.borderColor = "white";
	}


	if (row2_7 == row2_1 && row2_7 != "" || row2_7 == row2_2 && row2_7 != "" || row2_7 == row2_3 && row2_7 != "" || row2_7 == row2_4 && row2_7 != "" || 
			row2_7 == row2_5 && row2_7 != "" || row2_7 == row2_6 && row2_7 != "" || row2_7 == row2_9 && row2_7 != "" || row2_7 == row1_7 && row2_7 != "" ||
			row2_7 == row4_7 && row2_7 != "" || row2_7 == row1_8 && row2_7 != "" || row2_7 == row1_9 && row2_7 != "" || row2_7 == row3_9 && row2_7 != ""){
			let x = document.getElementById('row2-7').style.background = "red";
			let y = document.getElementById('row2-7').style.borderColor = "red";

	}
	
	else if (row2_7 == ""){
			let a = document.getElementById('row2-7').style.background = "white";
			let b = document.getElementById('row2-7').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row2-7').style.background = "white";
			let b = document.getElementById('row2-7').style.borderColor = "white";
	}


	if (row2_8 == row2_1 && row2_8 != "" || row2_8 == row2_2 && row2_8 != "" || row2_8 == row2_3 && row2_8 != "" || row2_8 == row2_4 && row2_8 != ""
			|| row2_8 == row2_5 && row2_8 != "" || row2_8 == row2_6 && row2_8 != "" || row2_8 == row2_7 && row2_8 != "" || row2_8 == row2_9 && row2_8 != ""
			|| row2_8 == row1_8 && row2_8 != "" || row2_8 == row1_7 && row2_8 != "" || row2_8 == row1_9 && row2_8 != "" ||
			row2_8 == row3_9 && row2_8 != ""){
			let x = document.getElementById('row2-8').style.background = "red";
			let y = document.getElementById('row2-8').style.borderColor = "red";

	}
	
	else if (row2_8 == ""){
			let a = document.getElementById('row2-8').style.background = "white";
			let b = document.getElementById('row2-8').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row2-8').style.background = "white";
			let b = document.getElementById('row2-8').style.borderColor = "white";
	}

	if (row3_2 == row3_1 && row3_2 != "" || row3_2 == row1_2 && row3_2 != "" || row3_2 == row2_2 && row3_2 != "" || 
		row3_2 == row3_9 && row3_2 != "" || row3_2 == row1_1 && row3_2 != "" || row3_2 == row1_3 && row3_2 != "" || 
		row3_2 == row2_1 && row3_2 != "" || row3_2 == row2_3 && row3_2 != ""){
			let x = document.getElementById('row3-2').style.background = "red";
			let y = document.getElementById('row3-2').style.borderColor = "red";

	}

	else if (row3_2 == ""){
			let a = document.getElementById('row3-2').style.background = "white";
			let b = document.getElementById('row3-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row3-2').style.background = "white";
			let b = document.getElementById('row3-2').style.borderColor = "white";
	}

	if (row3_3 == row3_1 && row3_3 != "" || row3_3 == row3_2 && row3_3 != "" || row3_3 == row3_9 && row3_3 != "" || 
		row3_3 == row1_3 && row3_3 != "" || row3_3 == row2_3 && row3_3 != "" || row3_3 == row4_3 && row3_3 != "" || 
		row3_3 == row1_1 && row3_3 != "" || row3_3 == row1_2 && row3_3 != "" || row3_3 == row2_1 && row3_3 != "" ||
			row3_3 == row2_2 && row3_3 != ""){
			let x = document.getElementById('row3-3').style.background = "red";
			let y = document.getElementById('row3-3').style.borderColor = "red";

	}

	else if (row3_3 == ""){
			let a = document.getElementById('row3-3').style.background = "white";
			let b = document.getElementById('row3-3').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row3-3').style.background = "white";
			let b = document.getElementById('row3-3').style.borderColor = "white";
	}


	if (row3_4 == row3_1 && row3_4 != "" || row3_4 == row3_2 && row3_4 != "" || row3_4 == row3_3 && row3_4 != "" || row3_4 == row3_9 && row3_4 != "" ||
			row3_4 == row2_4 && row3_4 != "" || row3_4 == row1_4 && row3_4 != "" || row3_4 == row1_5 && row3_4 != "" || row3_4 == row1_6 && row3_4 != "" ||
			row3_4 == row2_5 && row3_4 != "" || row3_4 == row2_6 && row3_4 != ""){
			let x = document.getElementById('row3-4').style.background = "red";
			let y = document.getElementById('row3-4').style.borderColor = "red";

	}

	else if (row3_4 == ""){
			let a = document.getElementById('row3-4').style.background = "white";
			let b = document.getElementById('row3-4').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row3-4').style.background = "white";
			let b = document.getElementById('row3-4').style.borderColor = "white";
	}

	if (row3_5 == row3_1 && row3_5 != "" || row3_5 == row3_2 && row3_5 != "" || row3_5 == row3_3 && row3_5 != "" || row3_5 == row3_4 && row3_5 != ""
			|| row3_5 == row3_9 && row3_5 != "" || row3_5 == row2_5 && row3_5 != "" || row3_5 == row1_5 && row3_5 != "" || row3_5 == row4_5 && row3_5 != "" ||
			row3_5 == row7_5 && row3_5 != "" || row3_5 == row8_5 && row3_5 != "" || row3_5 == row1_4 && row3_5 != "" || 
			row3_5 == row2_4 && row3_5 != "" || row3_5 == row1_6 && row3_5 != "" || row3_5 == row2_6 && row3_5 != ""){
			let x = document.getElementById('row3-5').style.background = "red";
			let y = document.getElementById('row3-5').style.borderColor = "red";

	}

	else if (row3_5 == ""){
			let a = document.getElementById('row3-5').style.background = "white";
			let b = document.getElementById('row3-5').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row3-5').style.background = "white";
			let b = document.getElementById('row3-5').style.borderColor = "white";
	}

	if (row3_6 == row3_1 && row3_6 != "" || row3_6 == row3_2 && row3_6 != "" || row3_6 == row3_3 && row3_6 != "" || row3_6 == row3_4 && row3_6 != "" ||
			row3_6 == row3_5 && row3_6 != "" || row3_6 == row3_9 && row3_6 != "" || row3_6 == row2_6 && row3_6 != "" || row3_6 == row1_6 && row3_6 != "" ||
			row3_6 == row6_6 && row3_6 != "" || row3_6 == row9_6 && row3_6 != "" || row3_6 == row1_4 && row3_6 != "" ||
			row3_6 == row1_5 && row3_6 != "" || row3_6 == row2_4 && row3_6 != "" || row3_6 == row2_5 && row3_6 != ""){
			let x = document.getElementById('row3-6').style.background = "red";
			let y = document.getElementById('row3-6').style.borderColor = "red";

	}
	else if (row3_6 == ""){
			let a = document.getElementById('row3-6').style.background = "white";
			let b = document.getElementById('row3-6').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row3-6').style.background = "white";
			let b = document.getElementById('row3-6').style.borderColor = "white";
	}

	if (row3_7 == row3_1 && row3_7 != "" || row3_7 == row3_2 && row3_7 != "" || row3_7 == row3_3 && row3_7 != "" || row3_7 == row3_4 && row3_7 != ""
			|| row3_7 == row3_5 && row3_7 != "" || row3_7 == row3_6 && row3_7 != "" || row3_7 == row3_9 && row3_7 != "" || row3_7 == row1_7 && row3_7 != ""
			|| row3_7 == row2_7 && row3_7 != "" || row3_7 == row4_7 && row3_7 != "" || row3_7 == row1_8 && row3_7 != "" ||
			row3_7 == row1_9 && row3_7 != "" || row3_7 == row2_8 && row3_7 != "" || row3_7 == row2_9 && row3_7 != ""){
			let x = document.getElementById('row3-7').style.background = "red";
			let y = document.getElementById('row3-7').style.borderColor = "red";

	}
	
	else if (row3_7 == ""){
			let a = document.getElementById('row3-7').style.background = "white";
			let b = document.getElementById('row3-7').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row3-7').style.background = "white";
			let b = document.getElementById('row3-7').style.borderColor = "white";
	}

	if (row3_8 == row3_1 && row3_8 != "" || row3_8 == row3_2 && row3_8 != "" || row3_8 == row3_3 && row3_8 != "" || row3_8 == row3_4 && row3_8 != "" ||
			row3_8 == row3_5 && row3_8 != "" || row3_8 == row3_6 && row3_8 != "" || row3_8 == row3_7 && row3_8 != "" || row3_8 == row3_9 && row3_8 != "" ||
			row3_8 == row2_8 && row3_8 != "" || row3_8 == row1_8 && row3_8 != "" || row3_8 == row1_7 && row3_8 != "" || 
			row3_8 == row1_9 && row3_8 != "" || row3_8 == row2_7 && row3_8 != "" || row3_8 == row2_9 && row3_8 != ""){
			let x = document.getElementById('row3-8').style.background = "red";
			let y = document.getElementById('row3-8').style.borderColor = "red";

	}
	else if (row3_8 == ""){
			let a = document.getElementById('row3-8').style.background = "white";
			let b = document.getElementById('row3-8').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row3-8').style.background = "white";
			let b = document.getElementById('row3-8').style.borderColor = "white";
	}

	if (row4_2 == row4_1 && row4_2 != "" || row4_2 == row4_3 && row4_2 != "" || row4_2 == row4_5 && row4_2 != "" || row4_2 == row4_7 && row4_2 != "" ||
			row4_2 == row4_9 && row4_2 != "" || row4_2 == row3_2 && row4_2 != "" || row4_2 == row2_2 && row4_2 != "" ||
			row4_2 == row1_2 && row4_2 != "" || row4_2 == row6_1 && row4_2 != ""){
			let x = document.getElementById('row4-2').style.background = "red";
			let y = document.getElementById('row4-2').style.borderColor = "red";

	}
	else if (row4_2 == ""){
			let a = document.getElementById('row4-2').style.background = "white";
			let b = document.getElementById('row4-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row4-2').style.background = "white";
			let b = document.getElementById('row4-2').style.borderColor = "white";
	}

	if (row4_4 == row4_1 && row4_4 != "" || row4_4 == row4_2 && row4_4 != "" || row4_4 == row4_3 && row4_4 != "" || row4_4 == row4_5 && row4_4 != "" ||
			row4_4 == row4_7 && row4_4 != "" || row4_4 == row4_9 && row4_4 != "" || row4_4 == row1_4 && row4_4 != "" || row4_4 == row2_4 && row4_4 != "" || 
			row4_4 == row3_4 && row4_4 != "" || row4_4 == row6_4 && row4_4 != "" || row4_4 == row9_4 && row4_4 != "" || row4_4 == row6_6 && row4_4 != ""){
			let x = document.getElementById('row4-4').style.background = "red";
			let y = document.getElementById('row4-4').style.borderColor = "red";

	}
	else if (row4_4 == ""){
			let a = document.getElementById('row4-4').style.background = "white";
			let b = document.getElementById('row4-4').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row4-4').style.background = "white";
			let b = document.getElementById('row4-4').style.borderColor = "white";
	}

	if (row4_6 == row4_1 && row4_6 != "" || row4_6 == row4_2 && row4_6 != "" || row4_6 == row4_3 && row4_6 != "" || row4_6 == row4_4 && row4_6 != "" ||
			row4_6 == row4_5 && row4_6 != "" || row4_6 == row4_7 && row4_6 != "" || row4_6 == row4_9 && row4_6 != "" || row4_6 == row1_6 && row4_6 != "" ||
			row4_6 == row2_6 && row4_6 != "" || row4_6 == row3_6 && row4_6 != "" || row4_6 == row6_6 && row4_6 != "" ||
			row4_6 == row9_6 && row4_6 != "" || row4_6 == row6_4 && row4_6 != ""){
			let x = document.getElementById('row4-6').style.background = "red";
			let y = document.getElementById('row4-6').style.borderColor = "red";

	}
	else if (row4_6 == ""){
			let a = document.getElementById('row4-6').style.background = "white";
			let b = document.getElementById('row4-6').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row4-6').style.background = "white";
			let b = document.getElementById('row4-6').style.borderColor = "white";
	}
	if (row4_8 == row4_1 && row4_8 != "" || row4_8 == row4_2 && row4_8 != "" || row4_8 == row4_3 && row4_8 != "" || row4_8 == row4_4 && row4_8 != "" ||
			row4_8 == row4_5 && row4_8 != "" || row4_8 == row4_6 && row4_8 != "" || row4_8 == row4_7 && row4_8 != "" || row4_8 == row4_9 && row4_8 != "" || 
			row4_8 == row1_8 && row4_8 != "" || row4_8 == row2_8 && row4_8 != "" || row4_8 == row3_8 && row4_8 != "" || row4_8 == row6_9 && row4_8 != ""){
			let x = document.getElementById('row4-8').style.background = "red";
			let y = document.getElementById('row4-8').style.borderColor = "red";

	}
	else if (row4_8 == ""){
			let a = document.getElementById('row4-8').style.background = "white";
			let b = document.getElementById('row4-8').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row4-8').style.background = "white";
			let b = document.getElementById('row4-8').style.borderColor = "white";
	}

	if (row5_1 == row1_1 && row5_1 != "" || row5_1 == row2_1 && row5_1 != "" || row5_1 == row3_1 && row5_1 != "" || row5_1 == row4_1 && row5_1 != "" ||
			row5_1 == row6_1 && row5_1 != "" || row5_1 == row7_1 && row5_1 != "" || row5_1 == row9_1 && row5_1 != "" ||
			row5_1 == row4_3 && row5_1 != "" || row5_1 == row4_2 && row5_1 != ""){
			let x = document.getElementById('row5-1').style.background = "red";
			let y = document.getElementById('row5-1').style.borderColor = "red";

	}
	else if (row5_1 == ""){
			let a = document.getElementById('row5-1').style.background = "white";
			let b = document.getElementById('row5-1').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-1').style.background = "white";
			let b = document.getElementById('row5-1').style.borderColor = "white";
	}
	if (row5_2 == row5_1 && row5_2 != "" || row5_2 == row1_2 && row5_2 != "" || row5_2 == row2_2 && row5_2 != "" || row5_2 == row3_2 && row5_2 != "" ||
			row5_2 == row4_2 && row5_2 != "" || row5_2 == row4_1 && row5_2 != "" || row5_2 == row4_3 && row5_2 != "" || row5_2 == row6_1 && row5_2 != ""){
			let x = document.getElementById('row5-2').style.background = "red";
			let y = document.getElementById('row5-2').style.borderColor = "red";

	}
	else if (row5_2 == ""){
			let a = document.getElementById('row5-2').style.background = "white";
			let b = document.getElementById('row5-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-2').style.background = "white";
			let b = document.getElementById('row5-2').style.borderColor = "white";
	}

	if (row5_3 == row5_1 && row5_3 != "" || row5_3 == row5_2 && row5_3 != "" || row5_3 == row1_3 && row5_3 != "" || row5_3 == row2_3 && row5_3 != "" || row5_3 == row3_3 && row5_3 != "" ||
			row5_3 == row4_3 && row5_3 != "" || row5_3 == row4_1 && row5_3 != ""  || row5_3 == row4_2 && row5_3 != "" || row5_3 == row6_1 && row5_3 != ""){
			let x = document.getElementById('row5-3').style.background = "red";
			let y = document.getElementById('row5-3').style.borderColor = "red";

	}
	else if (row5_3 == ""){
			let a = document.getElementById('row5-3').style.background = "white";
			let b = document.getElementById('row5-3').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-3').style.background = "white";
			let b = document.getElementById('row5-3').style.borderColor = "white";
	}

	if (row5_4 == row5_1 && row5_4 != "" || row5_4 == row5_2 && row5_4 != "" || row5_4 == row5_3 && row5_4 != "" || row5_4 == row1_4 && row5_4 != "" ||
			row5_4 == row2_4 && row5_4 != "" || row5_4 == row3_4 && row5_4 != "" || row5_4 == row4_4 && row5_4 != "" ||
			row5_4 == row6_4 && row5_4 != "" || row5_4 == row9_4 && row5_4 != "" || row5_4 == row4_5 && row5_4 != "" || 
			row5_4 == row4_6 && row5_4 != "" || row5_4 == row6_6 && row5_4 != ""){
			let x = document.getElementById('row5-4').style.background = "red";
			let y = document.getElementById('row5-4').style.borderColor = "red";

	}
	else if (row5_4 == ""){
			let a = document.getElementById('row5-4').style.background = "white";
			let b = document.getElementById('row5-4').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-4').style.background = "white";
			let b = document.getElementById('row5-4').style.borderColor = "white";
	}

	if (row5_5 == row5_1 && row5_5 != "" || row5_5 == row5_2 && row5_5 != "" || row5_5 == row5_3 && row5_5 != "" || row5_5 == row5_4 && row5_5 != "" ||
			row5_5 == row1_5 && row5_5 != "" || row5_5 == row2_5 && row5_5 != "" || row5_5 == row3_5 && row5_5 != "" 
			|| row5_5 == row4_5 && row5_5 != "" || row5_5 == row7_5 && row5_5 != "" || row5_5 == row8_5 && row5_5 != ""
			|| row5_5 == row4_4 && row5_5 != "" || row5_5 == row4_6 && row5_5 != "" || row5_5 == row6_4 && row5_5 != "" || row5_5 == row6_6 && row5_5 != ""){
			let x = document.getElementById('row5-5').style.background = "red";
			let y = document.getElementById('row5-5').style.borderColor = "red";

	}
	else if (row5_5 == ""){
			let a = document.getElementById('row5-5').style.background = "white";
			let b = document.getElementById('row5-5').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-5').style.background = "white";
			let b = document.getElementById('row5-5').style.borderColor = "white";
	}

	if (row5_6 == row5_1 && row5_6 != "" || row5_6 == row5_2 && row5_6 != "" || row5_6 == row5_3 && row5_6 != "" || row5_6 == row5_4 && row5_6 != "" ||
			row5_6 == row5_5 && row5_6 != "" || row5_6 == row1_6 && row5_6 != "" || row5_6 == row2_6 && row5_6 != "" || row5_6 == row3_6 && row5_6 != "" ||
			row5_6 == row4_6 && row5_6 != "" || row5_6 == row6_6 && row5_6 != "" || row5_6 == row9_6 && row5_6 != "" || 
			row5_6 == row4_4 && row5_6 != "" || row5_6 == row4_5 && row5_6 != "" || row5_6 == row6_4 && row5_6 != ""){
			let x = document.getElementById('row5-6').style.background = "red";
			let y = document.getElementById('row5-6').style.borderColor = "red";

	}
	else if (row5_6 == ""){
			let a = document.getElementById('row5-6').style.background = "white";
			let b = document.getElementById('row5-6').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-6').style.background = "white";
			let b = document.getElementById('row5-6').style.borderColor = "white";
	}

	if (row5_7 == row5_1 && row5_7 != "" || row5_7 == row5_2 && row5_7 != "" || row5_7 == row5_3 && row5_7 != "" || row5_7 == row5_4 && row5_7 != "" ||
			row5_7 == row5_5 && row5_7 != "" || row5_7 == row5_6 && row5_7 != "" || row5_7 == row1_7 && row5_7 != "" ||  row5_7 == row2_7 && row5_7 != "" ||
			row5_7 == row3_7 && row5_7 != "" || row5_7 == row4_7 && row5_7 != "" || row5_7 == row4_8 && row5_7 != "" || 
			row5_7 == row4_9 && row5_7 != "" || row5_7 == row6_9 && row5_7 != ""){
			let x = document.getElementById('row5-7').style.background = "red";
			let y = document.getElementById('row5-7').style.borderColor = "red";

	}
	else if (row5_7 == ""){
			let a = document.getElementById('row5-7').style.background = "white";
			let b = document.getElementById('row5-7').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-7').style.background = "white";
			let b = document.getElementById('row5-7').style.borderColor = "white";
	}

	if (row5_8 == row5_1 && row5_8 != "" || row5_8 == row5_2 && row5_8 != "" || row5_8 == row5_3 && row5_8 != "" || row5_8 == row5_4 && row5_8 != "" ||
			row5_8 == row5_5 && row5_8 != "" || row5_8 == row5_6 && row5_8 != "" || row5_8 == row5_7 && row5_8 != "" || row5_8 == row1_8 && row5_8 != "" ||
			row5_8 == row2_8 && row5_8 != "" || row5_8 == row3_8 && row5_8 != "" || row5_8 == row4_8 && row5_8 != "" ||
			row5_8 == row4_7 && row5_8 != "" || row5_8 == row4_9 && row5_8 != "" || row5_8 == row6_9 && row5_8 != ""){
			let x = document.getElementById('row5-8').style.background = "red";
			let y = document.getElementById('row5-8').style.borderColor = "red";

	}
	else if (row5_8 == ""){
			let a = document.getElementById('row5-8').style.background = "white";
			let b = document.getElementById('row5-8').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-8').style.background = "white";
			let b = document.getElementById('row5-8').style.borderColor = "white";
	}

	if (row5_9 == row5_1 && row5_9 != "" || row5_9 == row5_2 && row5_9 || row5_9 == row5_3 && row5_9 || row5_9 == row5_4 && row5_9 ||
			row5_9 == row5_5 && row5_9 || row5_9 == row5_6 && row5_9 || row5_9 == row5_7 && row5_9 || row5_9 == row5_8 && row5_9 || 
			row5_9 == row1_9 && row5_9 || row5_9 == row2_9 && row5_9 || row5_9 == row3_9 && row5_9 || row5_9 == row4_9 && row5_9 || 
			row5_9 == row6_9 && row5_9 || row5_9 == row7_9 && row5_9 || row5_9 == row9_9 && row5_9 || row5_9 == row4_7 && row5_9 ||
			row5_9 == row4_8 && row5_9){
			let x = document.getElementById('row5-9').style.background = "red";
			let y = document.getElementById('row5-9').style.borderColor = "red";

	}
	else if (row5_9 == ""){
			let a = document.getElementById('row5-9').style.background = "white";
			let b = document.getElementById('row5-9').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row5-9').style.background = "white";
			let b = document.getElementById('row5-9').style.borderColor = "white";
	}

	if (row6_2 == row6_1 && row6_2 != "" || row6_2 == row6_3 && row6_2 != "" || row6_2 == row6_4 && row6_2 != "" || 
			row6_2 == row6_6 && row6_2 != "" || row6_2 == row6_9 && row6_2 != "" || row6_2 == row1_2 && row6_2 != "" || 
			row6_2 == row2_2 && row6_2 != "" || row6_2 == row3_2 && row6_2 != "" || row6_2 == row4_2 && row6_2 != "" || row6_2 == row5_2 && row6_2 != ""){
			let x = document.getElementById('row6-2').style.background = "red";
			let y = document.getElementById('row6-2').style.borderColor = "red";

	}
	else if (row6_2 == ""){
			let a = document.getElementById('row6-2').style.background = "white";
			let b = document.getElementById('row6-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row6-2').style.background = "white";
			let b = document.getElementById('row6-2').style.borderColor = "white";
	}

	if (row6_2 == row6_1 && row6_2 != "" || row6_2 == row6_3 && row6_2 != "" || row6_2 == row6_4 && row6_2 != "" || 
			row6_2 == row6_6 && row6_2 != "" || row6_2 == row6_9 && row6_2 != "" || row6_2 == row1_2 && row6_2 != "" || 
			row6_2 == row2_2 && row6_2 != "" || row6_2 == row3_2 && row6_2 != "" || row6_2 == row4_2 && row6_2 != "" ||
			row6_2 == row5_2 && row6_2 != "" || row6_2 == row5_1 && row6_2 != "" || row6_2 == row5_3 && row6_2 != "" || row6_2 == row4_1 && row6_2 != "" || row6_2 == row4_3 && row6_2 != ""){
			let x = document.getElementById('row6-2').style.background = "red";
			let y = document.getElementById('row6-2').style.borderColor = "red";

	}
	else if (row6_2 == ""){
			let a = document.getElementById('row6-2').style.background = "white";
			let b = document.getElementById('row6-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row6-2').style.background = "white";
			let b = document.getElementById('row6-2').style.borderColor = "white";
	}

	if (row6_3 == row6_1 && row6_3 != "" || row6_3 == row6_2 && row6_3 != "" || row6_3 == row6_4 && row6_3 != "" || row6_3 == row6_6 && row6_3 != "" ||
			row6_3 == row6_9 && row6_3 != "" || row6_3 == row1_3 && row6_3 != "" || row6_3 == row2_3 && row6_3 != "" || row6_3 == row3_3 && row6_3 != ""
			|| row6_3 == row4_3 && row6_3 != "" || row6_3 == row5_3 && row6_3 != "" || row6_3 == row4_1 && row6_3 != "" ||
			row6_3 == row4_2 && row6_3 != "" || row6_3 == row5_1 && row6_3 != "" || row6_3 == row5_2 && row6_3 != ""){
			let x = document.getElementById('row6-3').style.background = "red";
			let y = document.getElementById('row6-3').style.borderColor = "red";

	}
	else if (row6_3 == ""){
			let a = document.getElementById('row6-3').style.background = "white";
			let b = document.getElementById('row6-3').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row6-3').style.background = "white";
			let b = document.getElementById('row6-3').style.borderColor = "white";
	}

	if (row6_5 == row6_1 && row6_5 != "" || row6_5 == row6_2 && row6_5 != "" || row6_5 == row6_3 && row6_5 != "" || row6_5 == row6_4 && row6_5 != "" || row6_5 == row6_6 && row6_5 != "" || row6_5 == row6_9 && row6_5 != "" ||
			row6_5 == row1_5 && row6_5 != "" || row6_5 == row2_5 && row6_5 != "" || row6_5 == row3_5 && row6_5 != "" ||
			row6_5 == row4_5 && row6_5 != "" || row6_5 == row5_5 && row6_5 != "" || row6_5 == row7_5 && row6_5 != "" ||
			row6_5 == row8_5 && row6_5 != "" || row6_5 == row4_4 && row6_5 != "" || row6_5 == row4_6 && row6_5 != "" ||
			row6_5 == row5_4 && row6_5 != "" || row6_5 == row5_6 && row6_5 != ""){
			let x = document.getElementById('row6-5').style.background = "red";
			let y = document.getElementById('row6-5').style.borderColor = "red";

	}
	else if (row6_5 == ""){
			let a = document.getElementById('row6-5').style.background = "white";
			let b = document.getElementById('row6-5').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row6-5').style.background = "white";
			let b = document.getElementById('row6-5').style.borderColor = "white";
	}

	if (row6_7 == row6_1 && row6_7 != "" || row6_7 == row6_2 && row6_7 != "" || row6_7 == row6_3 && row6_7 != "" || row6_7 == row6_4 && row6_7 != "" ||
			row6_7 == row6_5 && row6_7 != "" || row6_7 == row6_6 && row6_7 != "" || row6_7 == row6_9 && row6_7 != "" || row6_7 == row1_7 && row6_7 != "" ||
			row6_7 == row2_7 && row6_7 != "" || row6_7 == row3_7 && row6_7 != "" || row6_7 == row4_7 && row6_7 != "" ||
			row6_7 == row5_7 && row6_7 != "" || row6_7 == row4_8 && row6_7 != "" || row6_7 == row4_9 && row6_7 != "" || 
			row6_7 == row5_8 && row6_7 != "" || row6_7 == row5_9 && row6_7 != ""){
			let x = document.getElementById('row6-7').style.background = "red";
			let y = document.getElementById('row6-7').style.borderColor = "red";

	}
	else if (row6_7 == ""){
			let a = document.getElementById('row6-7').style.background = "white";
			let b = document.getElementById('row6-7').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row6-7').style.background = "white";
			let b = document.getElementById('row6-7').style.borderColor = "white";
	}

	if (row6_8 == row6_1 && row6_8 != "" || row6_8 == row6_2 && row6_8 != "" || row6_8 == row6_3 && row6_8 != "" || row6_8 == row6_4 && row6_8 != "" || row6_8 == row6_5 && row6_8 != "" ||
			row6_8 == row6_6 && row6_8 != "" || row6_8 == row6_7 && row6_8 != "" || row6_8 == row6_9 && row6_8 != "" ||  row6_8 == row1_8 && row6_8 != "" ||
			row6_8 == row2_8 && row6_8 != "" || row6_8 == row3_8 && row6_8 != "" || row6_8 == row4_8 && row6_8 != "" || 
			row6_8 == row5_8 && row6_8 != "" || row6_8 == row4_7 && row6_8 != "" || row6_8 == row4_9 && row6_8 != "" || 
			row6_8 == row5_7 && row6_8 != "" || row6_8 == row5_9 && row6_8 != ""){
			let x = document.getElementById('row6-8').style.background = "red";
			let y = document.getElementById('row6-8').style.borderColor = "red";

	}
	else if (row6_8 == ""){
			let a = document.getElementById('row6-8').style.background = "white";
			let b = document.getElementById('row6-8').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row6-8').style.background = "white";
			let b = document.getElementById('row6-8').style.borderColor = "white";
	}
	if (row7_2 == row7_1 && row7_2 != "" || row7_2 == row7_5 && row7_2 != "" || row7_2 == row7_9 && row7_2 != "" || row7_2 == row1_2 && row7_2 != ""
			|| row7_2 == row2_2 && row7_2 != "" || row7_2 == row3_2 && row7_2 != "" || row7_2 == row4_2 && row7_2 != "" || row7_2 == row5_2 && row7_2 != "" 
			|| row7_2 == row6_2 && row7_2 != "" || row7_2 == row9_1 && row7_2 != ""){
			let x = document.getElementById('row7-2').style.background = "red";
			let y = document.getElementById('row7-2').style.borderColor = "red";

	}
	else if (row7_2 == ""){
			let a = document.getElementById('row7-2').style.background = "white";
			let b = document.getElementById('row7-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row7-2').style.background = "white";
			let b = document.getElementById('row7-2').style.borderColor = "white";
	}

	if (row7_3 == row7_1 && row7_3 != "" || row7_3 == row7_2 && row7_3 != "" || row7_3 == row7_5 && row7_3 != "" || row7_3 == row7_9 && row7_3 != "" ||
			row7_3 == row1_3 && row7_3 != "" || row7_3 == row2_3 && row7_3 != "" || row7_3 == row3_3 && row7_3 != ""
			|| row7_3 == row4_3 && row7_3 != "" || row7_3 == row5_3 && row7_3 != "" || row7_3 == row6_3 && row7_3 != "" || row7_3 == row9_1 && row7_3 != ""){
			let x = document.getElementById('row7-3').style.background = "red";
			let y = document.getElementById('row7-3').style.borderColor = "red";

	}
	else if (row7_3 == ""){
			let a = document.getElementById('row7-3').style.background = "white";
			let b = document.getElementById('row7-3').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row7-3').style.background = "white";
			let b = document.getElementById('row7-3').style.borderColor = "white";
	}

	if (row7_4 == row7_1 && row7_4 != "" || row7_4 == row7_2 && row7_4 != "" || row7_4 == row7_3 && row7_4 != "" || 
			row7_4 == row1_4 && row7_4 != "" || row7_4 == row2_4 && row7_4 != "" || row7_4 == row3_4 && row7_4 != "" ||
			row7_4 == row4_4 && row7_4 != "" || row7_4 == row5_4 && row7_4 != "" || row7_4 == row6_4 && row7_4 != "" || 
			row7_4 == row9_4 && row7_4 != "" || row7_4 == row8_5 && row7_4 != "" || row7_4 == row9_6 && row7_4 != ""){
			let x = document.getElementById('row7-4').style.background = "red";
			let y = document.getElementById('row7-4').style.borderColor = "red";

	}
	else if (row7_4 == ""){
			let a = document.getElementById('row7-4').style.background = "white";
			let b = document.getElementById('row7-4').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row7-4').style.background = "white";
			let b = document.getElementById('row7-4').style.borderColor = "white";
	}

	if (row7_6 == row7_1 && row7_6 != "" || row7_6 == row7_2 && row7_6 != "" || row7_6 == row7_3 && row7_6 != "" || row7_6 == row7_4 && row7_6 != "" || row7_6 == row7_5 && row7_6 != "" ||
			row7_6 == row1_6 && row7_6 != "" || row7_6 == row2_6 && row7_6 != "" || row7_6 == row3_6 && row7_6 != "" ||
			row7_6 == row4_6 && row7_6 != "" || row7_6 == row5_6 && row7_6 != "" || row7_6 == row6_6 && row7_6 != "" || 
			row7_6 == row9_6 && row7_6 != "" || row7_6 == row9_4 && row7_6 != "" || row7_6 == row8_5 && row7_6 != ""){
			let x = document.getElementById('row7-6').style.background = "red";
			let y = document.getElementById('row7-6').style.borderColor = "red";

	}
	else if (row7_6 == ""){
			let a = document.getElementById('row7-6').style.background = "white";
			let b = document.getElementById('row7-6').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row7-6').style.background = "white";
			let b = document.getElementById('row7-6').style.borderColor = "white";
	}

	if (row7_7 == row7_1 && row7_7 != "" || row7_7 == row7_2 && row7_7 != "" || row7_7 == row7_3 && row7_7 != "" || row7_7 == row7_4 && row7_7 != "" || row7_7 == row7_5 && row7_7 != "" ||
			row7_7 == row7_6 && row7_7 != "" || row7_7 == row7_9 && row7_7 != "" || row7_7 == row1_7 && row7_7 != "" || row7_7 == row2_7 && row7_7 != "" || row7_7 == row3_7 && row7_7 != "" ||
			row7_7 == row4_7 && row7_7 != "" || row7_7 == row5_7 && row7_7 != "" || row7_7 == row6_7 && row7_7 != "" ||
			row7_7 == row9_9 && row7_7 != "" ){
			let x = document.getElementById('row7-7').style.background = "red";
			let y = document.getElementById('row7-7').style.borderColor = "red";

	}
	else if (row7_7 == ""){
			let a = document.getElementById('row7-7').style.background = "white";
			let b = document.getElementById('row7-7').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row7-7').style.background = "white";
			let b = document.getElementById('row7-7').style.borderColor = "white";
	}

	if (row7_8 == row7_1 && row7_8 != "" || row7_8 == row7_2 && row7_8 != "" || row7_8 == row7_3 && row7_8 != "" || row7_8 == row7_4 && row7_8 != "" || row7_8 == row7_5 && row7_8 != "" ||
			row7_8 == row7_6 && row7_8 != "" || row7_8 == row7_7 && row7_8 != "" || row7_8 == row7_9 && row7_8 != "" || row7_8 == row1_8 && row7_8 != "" || row7_8 == row2_8 && row7_8 != "" || row7_8 == row3_8 && row7_8 != "" ||
			row7_8 == row4_8 && row7_8 != "" || row7_8 == row5_8 && row7_8 != "" || row7_8 == row6_8 && row7_8 != "" || row7_8 == row9_9 && row7_8 != ""){
			let x = document.getElementById('row7-8').style.background = "red";
			let y = document.getElementById('row7-8').style.borderColor = "red";

	}
	else if (row7_8 == ""){
			let a = document.getElementById('row7-8').style.background = "white";
			let b = document.getElementById('row7-8').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row7-8').style.background = "white";
			let b = document.getElementById('row7-8').style.borderColor = "white";
	}

	if (row8_1 == row8_5 && row8_1 != "" || row8_1 == row1_1 && row8_1 != "" || row8_1 == row2_1 && row8_1 != "" || row8_1 == row3_1 && row8_1 != ""
			|| row8_1 == row4_1 && row8_1 != "" || row8_1 == row5_1 && row8_1 != "" || row8_1 == row6_1 && row8_1 != "" ||
			row8_1 == row7_1 && row8_1 != "" || row8_1 == row9_1 && row8_1 != "" || row8_1 == row7_2 && row8_1 != "" || row8_1 == row7_3 && row8_1 != ""){
			let x = document.getElementById('row8-1').style.background = "red";
			let y = document.getElementById('row8-1').style.borderColor = "red";

	}
	else if (row8_1 == ""){
			let a = document.getElementById('row8-1').style.background = "white";
			let b = document.getElementById('row8-1').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row8-1').style.background = "white";
			let b = document.getElementById('row8-1').style.borderColor = "white";
	}

	if (row8_2 == row8_1 && row8_2 != "" || row8_2 == row8_5 && row8_2 != "" || row8_2 == row1_2 && row8_2 != "" || row8_2 == row2_2 && row8_2 != "" || row8_2 == row3_2 && row8_2!= ""
			|| row8_2 == row4_2 && row8_2 != "" || row8_2 == row5_2 && row8_2 != "" || row8_2 == row6_2 && row8_2 != "" || 
			row8_2 == row7_2 && row8_2 != "" || row8_2 == row7_1 && row8_2 != "" || row8_2 == row7_3 && row8_2 != "" || row8_2 == row9_1 && row8_2 != ""){
			let x = document.getElementById('row8-2').style.background = "red";
			let y = document.getElementById('row8-2').style.borderColor = "red";

	}
	else if (row8_2 == ""){
			let a = document.getElementById('row8-2').style.background = "white";
			let b = document.getElementById('row8-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row8-2').style.background = "white";
			let b = document.getElementById('row8-2').style.borderColor = "white";
	}

	if (row8_3 == row8_1 && row8_3 != "" || row8_3 == row8_2 && row8_3 != "" || row8_3 == row8_5 && row8_3 != "" || row8_3 == row1_3 && row8_3 != "" || row8_3 == row2_3 && row8_3 != "" || row8_3 == row3_3 && row8_3!= ""
			|| row8_3 == row4_3 && row8_3 != "" || row8_3 == row5_3 && row8_3 != "" || row8_3 == row6_3 && row8_3 != "" || 
			row8_3 == row7_3 && row8_3 != "" || row8_3 == row7_1 && row8_3 != "" || row8_3 == row7_2 && row8_3 != "" ||
			row8_3 == row9_1 && row8_3 != ""){
			let x = document.getElementById('row8-3').style.background = "red";
			let y = document.getElementById('row8-3').style.borderColor = "red";

	}
	else if (row8_3 == ""){
			let a = document.getElementById('row8-3').style.background = "white";
			let b = document.getElementById('row8-3').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row8-3').style.background = "white";
			let b = document.getElementById('row8-3').style.borderColor = "white";
	}

	if (row8_4 == row8_1 && row8_4 != "" || row8_4 == row8_2 && row8_4 != ""  || row8_4 == row8_3 && row8_4 != "" || row8_4 == row8_5 && row8_4 != "" || row8_4 == row1_4 && row8_4 != "" || row8_4 == row2_4 && row8_4 != "" || row8_4 == row3_4 && row8_4!= ""
			|| row8_4 == row4_4 && row8_4 != "" || row8_4 == row5_4 && row8_4 != "" || row8_4 == row6_4 && row8_4 != "" ||
			row8_4 == row7_4 && row8_4 != "" || row8_4 == row7_6 && row8_4 != "" || row8_4 == row7_5 && row8_4 != "" || row8_4 == row9_6 && row8_4 != ""){
			let x = document.getElementById('row8-4').style.background = "red";
			let y = document.getElementById('row8-4').style.borderColor = "red";

	}
	else if (row8_4 == ""){
			let a = document.getElementById('row8-4').style.background = "white";
			let b = document.getElementById('row8-4').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row8-4').style.background = "white";
			let b = document.getElementById('row8-4').style.borderColor = "white";
	}

	if (row8_6 == row8_1 && row8_6 != "" || row8_6 == row8_2 && row8_6 != ""  || row8_6 == row8_3 && row8_6 != "" || row8_6 == row8_4 && row8_6 != "" || row8_6 == row8_5 && row8_6 != "" || row8_6 == row1_6 && row8_6 != "" || row8_6 == row2_6 && row8_6 != "" || row8_6 == row3_6 && row8_6 != ""
			|| row8_6 == row4_6 && row8_6 != "" || row8_6 == row5_6 && row8_6 != "" || row8_6 == row6_6 && row8_6 != "" || 
			row8_6 == row7_6 && row8_6 != "" || row8_6 == row9_6 && row8_6 != "" || row8_6 == row7_4 && row8_6 != "" || 
			row8_6 == row7_5 && row8_6 != "" || row8_6 == row9_4 && row8_6 != ""){
			let x = document.getElementById('row8-6').style.background = "red";
			let y = document.getElementById('row8-6').style.borderColor = "red";

	}
	else if (row8_6 == ""){
			let a = document.getElementById('row8-6').style.background = "white";
			let b = document.getElementById('row8-6').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row8-6').style.background = "white";
			let b = document.getElementById('row8-6').style.borderColor = "white";
	}

	if (row8_7 == row8_1 && row8_7 != "" || row8_7 == row8_2 && row8_7 != ""  || row8_7 == row8_3 && row8_7 != "" || row8_7 == row8_4 && row8_7 != "" || row8_7 == row8_5 && row8_7 != ""  || row8_7 == row8_6 && row8_7 != "" || row8_7 == row1_7 && row8_7 != "" || row8_7 == row2_7 && row8_7 != "" || row8_7 == row3_7 && row8_7 != ""
			|| row8_7 == row4_7 && row8_7 != "" || row8_7 == row5_7 && row8_7 != "" || row8_7 == row6_7 && row8_7 != "" || 
			row8_7 == row7_7 && row8_7 != "" || row8_7 == row7_8 && row8_7 != "" || row8_7 == row7_9 && row8_7 != "" || row8_7 == row9_9 && row8_7 != ""){
			let x = document.getElementById('row8-7').style.background = "red";
			let y = document.getElementById('row8-7').style.borderColor = "red";

	}
	else if (row8_7 == ""){
			let a = document.getElementById('row8-7').style.background = "white";
			let b = document.getElementById('row8-7').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row8-7').style.background = "white";
			let b = document.getElementById('row8-7').style.borderColor = "white";
	}

	if (row8_8 == row8_1 && row8_8 != "" || row8_8 == row8_2 && row8_8 != ""  || row8_8 == row8_3 && row8_8 != "" || row8_8 == row8_4 && row8_8 != "" || row8_8 == row8_5 && row8_8 != ""  || row8_8 == row8_6 && row8_8 != "" || row8_8 == row8_7 && row8_8 != "" || row8_8 == row1_8 && row8_8 != "" || row8_8 == row2_8 && row8_8 != "" || row8_8 == row3_8 && row8_8 != ""
			|| row8_8 == row4_8 && row8_8 != "" || row8_8 == row5_8 && row8_8 != "" || row8_8 == row6_8 && row8_8 != "" || row8_8 == row7_8 && row8_8 != "" ||
			row8_8 == row7_7 && row8_8 != "" || row8_8 == row7_9 && row8_8 != "" || row8_8 == row9_9 && row8_8 != ""){
			let x = document.getElementById('row8-8').style.background = "red";
			let y = document.getElementById('row8-8').style.borderColor = "red";

	}
	else if (row8_8 == ""){
			let a = document.getElementById('row8-8').style.background = "white";
			let b = document.getElementById('row8-8').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row8-8').style.background = "white";
			let b = document.getElementById('row8-8').style.borderColor = "white";
	}

	if (row8_9 == row8_1 && row8_9 != "" || row8_9 == row8_2 && row8_9 != ""  || row8_9 == row8_3 && row8_9 != "" || row8_9 == row8_4 && row8_9 != "" || row8_9 == row8_5 && row8_9 != ""  || row8_9 == row8_6 && row8_9 != "" || row8_9 == row8_7 && row8_9 != "" || row8_9 == row8_8 && row8_9 != "" ||row8_9 == row1_9 && row8_9 != "" || row8_9 == row2_9 && row8_9 != "" || row8_9 == row3_9 && row8_9 != ""
			|| row8_9 == row4_9 && row8_9 != "" || row8_9 == row5_9 && row8_9 != "" || row8_9 == row6_9 && row8_9 != "" || 
			row8_9 == row7_9 && row8_9 != "" || row8_9 == row7_7 && row8_9 != "" || row8_9 == row7_8 && row8_9 != ""){
			let x = document.getElementById('row8-9').style.background = "red";
			let y = document.getElementById('row8-9').style.borderColor = "red";

	}
	else if (row8_9 == ""){
			let a = document.getElementById('row8-9').style.background = "white";
			let b = document.getElementById('row8-9').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row8-9').style.background = "white";
			let b = document.getElementById('row8-9').style.borderColor = "white";
	}

	if (row9_2 == row9_1 && row9_2 != "" || row9_2 == row9_4 && row9_2 != "" || row9_2 == row9_6 && row9_2 != "" || row9_2 == row9_9 && row9_2 != "" ||
			row9_2 == row1_2 && row9_2 != "" || row9_2 == row2_2 && row9_2 != "" || row9_2 == row3_2 && row9_2 != "" || row9_2 == row4_2 && row9_2 != ""
			|| row9_2 == row5_2 && row9_2 != "" || row9_2 == row6_2 && row9_2 != "" || row9_2 == row7_2 && row9_2 != "" ||
			row9_2 == row8_2 && row9_2 != "" || row9_2 == row7_1 && row9_2 != "" || row9_2 == row7_3 && row9_2 != "" || 
			row9_2 == row8_1 && row9_2 != "" || row9_2 == row8_3 && row9_2 != ""){
			let x = document.getElementById('row9-2').style.background = "red";
			let y = document.getElementById('row9-2').style.borderColor = "red";

	}
	else if (row9_2 == ""){
			let a = document.getElementById('row9-2').style.background = "white";
			let b = document.getElementById('row9-2').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row9-2').style.background = "white";
			let b = document.getElementById('row9-2').style.borderColor = "white";
	}

	if (row9_3 == row9_1 && row9_3 != "" || row9_3 == row9_2 && row9_3 != "" || row9_3 == row9_4 && row9_3 != "" || row9_3 == row9_6 && row9_3 != "" || row9_3 == row9_9 && row9_3 != "" ||
			row9_3 == row1_3 && row9_3 != "" || row9_3 == row2_3 && row9_3 != "" || row9_3 == row3_3 && row9_3 != "" || row9_3 == row4_3 && row9_3 != ""
			|| row9_3 == row5_3 && row9_3 != "" || row9_3 == row6_3 && row9_3 != "" || row9_3 == row7_3 && row9_3 != "" || 
			row9_3 == row8_3 && row9_3 != "" || row9_3 == row7_1 && row9_3 != "" || row9_3 == row7_2 && row9_3 != "" || 
			row9_3 == row8_3 && row9_3 != ""){
			let x = document.getElementById('row9-3').style.background = "red";
			let y = document.getElementById('row9-3').style.borderColor = "red";

	}
	else if (row9_3 == ""){
			let a = document.getElementById('row9-3').style.background = "white";
			let b = document.getElementById('row9-3').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row9-3').style.background = "white";
			let b = document.getElementById('row9-3').style.borderColor = "white";
	}

	if (row9_5 == row9_1 && row9_5 != "" || row9_5 == row9_2 && row9_5 != "" || row9_5 == row9_3 && row9_5 != "" || row9_5 == row9_4 && row9_5 != "" || row9_5 == row9_6 && row9_5 != "" || row9_5 == row9_9 && row9_5 != "" ||
			row9_5 == row1_5 && row9_5 != "" || row9_5 == row2_5 && row9_5 != "" || row9_5 == row3_5 && row9_5 != "" || row9_5 == row4_5 && row9_5 != ""
			|| row9_5 == row5_5 && row9_5 != "" || row9_5 == row6_5 && row9_5 != "" || row9_5 == row7_5 && row9_5 != "" || 
			row9_5 == row8_5 && row9_5 != "" || row9_5 == row7_4 && row9_5 != "" || row9_5 == row7_6 && row9_5 != "" || 
			row9_5 == row8_4 && row9_5 != "" || row9_5 == row8_6 && row9_5 != ""){
			let x = document.getElementById('row9-5').style.background = "red";
			let y = document.getElementById('row9-5').style.borderColor = "red";

	}
	else if (row9_5 == ""){
			let a = document.getElementById('row9-5').style.background = "white";
			let b = document.getElementById('row9-5').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row9-5').style.background = "white";
			let b = document.getElementById('row9-5').style.borderColor = "white";
	}

	if (row9_7 == row9_1 && row9_7 != "" || row9_7 == row9_2 && row9_7 != "" || row9_7 == row9_3 && row9_7 != "" || row9_7 == row9_4 && row9_7 != "" || row9_7 == row9_5 && row9_7 != "" || row9_7 == row9_6 && row9_7 != "" || row9_7 == row9_9 && row9_7 != "" ||
			row9_7 == row1_7 && row9_7 != "" || row9_7 == row2_7 && row9_7 != "" || row9_7 == row3_7 && row9_7 != "" || row9_7 == row4_7 && row9_7 != ""
			|| row9_7 == row5_7 && row9_7 != "" || row9_7 == row6_7 && row9_7 != "" || row9_7 == row7_7 && row9_7 != "" || 
			row9_7 == row8_7 && row9_7 != "" || row9_7 == row7_8 && row9_7 != "" || row9_7 == row7_9 && row9_7 != "" || 
			row9_7 == row8_8 && row9_7 != "" || row9_7 == row8_9 && row9_7 != ""){
			let x = document.getElementById('row9-7').style.background = "red";
			let y = document.getElementById('row9-7').style.borderColor = "red";

	}
	else if (row9_7 == ""){
			let a = document.getElementById('row9-7').style.background = "white";
			let b = document.getElementById('row9-7').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row9-7').style.background = "white";
			let b = document.getElementById('row9-7').style.borderColor = "white";
	}

	if (row9_8 == row9_1 && row9_8 != "" || row9_8 == row9_2 && row9_8 != "" || row9_8 == row9_3 && row9_8 != "" || row9_8 == row9_4 && row9_8 != "" || row9_8 == row9_5 && row9_8 != "" || row9_8 == row9_6 && row9_8 != "" || row9_8 == row9_7 && row9_8 != "" || row9_8 == row9_9 && row9_8 != "" ||
			row9_8 == row1_8 && row9_8 != "" || row9_8 == row2_8 && row9_8 != "" || row9_8 == row3_8 && row9_8 != "" || row9_8 == row4_8 && row9_8 != ""
			|| row9_8 == row5_8 && row9_8 != "" || row9_8 == row6_8 && row9_8 != "" || row9_8 == row7_8 && row9_8 != "" || row9_8 == row8_8 && row9_8 != ""
			|| row9_8 == row7_7 && row9_8 != "" || row9_8 == row7_9 && row9_8 != "" || row9_8 == row8_7 && row9_8 != "" || row9_8 == row8_9 && row9_8 != ""){
			let x = document.getElementById('row9-8').style.background = "red";
			let y = document.getElementById('row9-8').style.borderColor = "red";

	}
	else if (row9_8 == ""){
			let a = document.getElementById('row9-8').style.background = "white";
			let b = document.getElementById('row9-8').style.borderColor = "white";
	}
	else{
			let a = document.getElementById('row9-8').style.background = "white";
			let b = document.getElementById('row9-8').style.borderColor = "white";
	}




	var t = setTimeout(check,100);
		
}
		
    check();

   	function winner(){
   		if(document.getElementById('row1-2').value != "" && document.getElementById('row1-2').style.background == "white" &&
    	   document.getElementById('row1-5').value != "" && document.getElementById('row1-5').style.background == "white" &&
		   document.getElementById('row1-8').value != "" && document.getElementById('row1-8').style.background == "white" &&
		   document.getElementById('row2-1').value != "" && document.getElementById('row2-1').style.background == "white" &&
		   document.getElementById('row2-2').value != "" && document.getElementById('row2-2').style.background == "white" &&
		   document.getElementById('row2-4').value != "" && document.getElementById('row2-4').style.background == "white" &&
		   document.getElementById('row2-5').value != "" && document.getElementById('row2-5').style.background == "white" &&
		   document.getElementById('row2-7').value != "" && document.getElementById('row2-7').style.background == "white" &&
		   document.getElementById('row2-8').value != "" &&	document.getElementById('row2-8').style.background == "white" &&
		   document.getElementById('row3-2').value != "" && document.getElementById('row3-2').style.background == "white" &&
		   document.getElementById('row3-3').value != "" && document.getElementById('row3-3').style.background == "white" &&
		   document.getElementById('row3-4').value != "" && document.getElementById('row3-4').style.background == "white" &&
		   document.getElementById('row3-5').value != "" && document.getElementById('row3-5').style.background == "white" &&
		   document.getElementById('row3-6').value != "" && document.getElementById('row3-6').style.background == "white" &&
		   document.getElementById('row3-7').value != "" && document.getElementById('row3-7').style.background == "white" &&
		   document.getElementById('row3-8').value != "" && document.getElementById('row3-8').style.background == "white" &&
		   document.getElementById('row4-2').value != "" && document.getElementById('row4-2').style.background == "white" &&
		   document.getElementById('row4-4').value != "" && document.getElementById('row4-4').style.background == "white" &&
		   document.getElementById('row4-6').value != "" && document.getElementById('row4-6').style.background == "white" &&
		   document.getElementById('row4-8').value != "" && document.getElementById('row4-8').style.background == "white" &&
		   document.getElementById('row5-1').value != "" && document.getElementById('row5-1').style.background == "white" &&
		   document.getElementById('row5-2').value != "" && document.getElementById('row5-2').style.background == "white" &&
		   document.getElementById('row5-3').value != "" && document.getElementById('row5-3').style.background == "white" &&
		   document.getElementById('row5-4').value != "" && document.getElementById('row5-4').style.background == "white" &&
		   document.getElementById('row5-5').value != "" && document.getElementById('row5-5').style.background == "white" &&
		   document.getElementById('row5-6').value != "" && document.getElementById('row5-6').style.background == "white" &&
		   document.getElementById('row5-7').value != "" && document.getElementById('row5-7').style.background == "white" &&
		   document.getElementById('row5-8').value != "" && document.getElementById('row5-8').style.background == "white" &&
		   document.getElementById('row5-9').value != "" && document.getElementById('row5-9').style.background == "white" &&
		   document.getElementById('row6-2').value != "" && document.getElementById('row6-2').style.background == "white" &&
		   document.getElementById('row6-3').value != "" && document.getElementById('row6-3').style.background == "white" &&
		   document.getElementById('row6-5').value != "" && document.getElementById('row6-5').style.background == "white" &&
		   document.getElementById('row6-7').value != "" && document.getElementById('row6-7').style.background == "white" &&
		   document.getElementById('row6-8').value != "" && document.getElementById('row6-8').style.background == "white" &&
		   document.getElementById('row7-2').value != "" && document.getElementById('row7-2').style.background == "white" &&
		   document.getElementById('row7-3').value != "" && document.getElementById('row7-3').style.background == "white" &&
		   document.getElementById('row7-4').value != "" && document.getElementById('row7-4').style.background == "white" &&
		   document.getElementById('row7-6').value != "" && document.getElementById('row7-6').style.background == "white" &&
		   document.getElementById('row7-7').value != "" && document.getElementById('row7-7').style.background == "white" &&
		   document.getElementById('row7-8').value != "" && document.getElementById('row7-8').style.background == "white" &&
		   document.getElementById('row8-1').value != "" && document.getElementById('row8-1').style.background == "white" &&
		   document.getElementById('row8-2').value != "" && document.getElementById('row8-2').style.background == "white" &&
		   document.getElementById('row8-3').value != "" && document.getElementById('row8-3').style.background == "white" &&
		   document.getElementById('row8-4').value != "" && document.getElementById('row8-4').style.background == "white" &&
		   document.getElementById('row8-6').value != "" && document.getElementById('row8-6').style.background == "white" &&
		   document.getElementById('row8-7').value != "" && document.getElementById('row8-7').style.background == "white" &&
		   document.getElementById('row8-8').value != "" && document.getElementById('row8-8').style.background == "white" &&
		   document.getElementById('row8-9').value != "" && document.getElementById('row8-9').style.background == "white" &&
		   document.getElementById('row9-2').value != "" && document.getElementById('row9-2').style.background == "white" &&
		   document.getElementById('row9-3').value != "" && document.getElementById('row9-3').style.background == "white" &&
		   document.getElementById('row9-5').value != "" && document.getElementById('row9-5').style.background == "white" &&
		   document.getElementById('row9-7').value != "" && document.getElementById('row9-7').style.background == "white" &&
		   document.getElementById('row9-8').value != "" && document.getElementById('row9-8').style.background == "white"){

			let x = document.getElementById('winner-area').style.display = "block";
		}
		    var t = setTimeout(winner,100);

   }
   	winner();
    function newgame(){

    	document.getElementById('row1-2').value = "";
    	document.getElementById('row1-5').value = "";
		document.getElementById('row1-8').value = "";
		document.getElementById('row2-1').value = "";
		document.getElementById('row2-2').value = "";
		document.getElementById('row2-4').value = "";
		document.getElementById('row2-5').value = "";
		document.getElementById('row2-7').value = "";
		document.getElementById('row2-8').value = "";
		document.getElementById('row3-2').value = "";
		document.getElementById('row3-3').value = "";
		document.getElementById('row3-4').value = "";
		document.getElementById('row3-5').value = "";
		document.getElementById('row3-6').value = "";
		document.getElementById('row3-7').value = "";
		document.getElementById('row3-8').value = "";
		document.getElementById('row4-2').value = "";
		document.getElementById('row4-4').value = "";
		document.getElementById('row4-6').value = "";
		document.getElementById('row4-8').value = "";
		document.getElementById('row5-1').value = "";
		document.getElementById('row5-2').value = "";
		document.getElementById('row5-3').value = "";
		document.getElementById('row5-4').value = "";
		document.getElementById('row5-5').value = "";
		document.getElementById('row5-6').value = "";
		document.getElementById('row5-7').value = "";
		document.getElementById('row5-8').value = "";
		document.getElementById('row5-9').value = "";
		document.getElementById('row6-2').value = "";
		document.getElementById('row6-3').value = "";
		document.getElementById('row6-5').value = "";
		document.getElementById('row6-7').value = "";
		document.getElementById('row6-8').value = "";
		document.getElementById('row7-2').value = "";
		document.getElementById('row7-3').value = "";
		document.getElementById('row7-4').value = "";
		document.getElementById('row7-6').value = "";
		document.getElementById('row7-7').value = "";
		document.getElementById('row7-8').value = "";
		document.getElementById('row8-1').value = "";
		document.getElementById('row8-2').value = "";
		document.getElementById('row8-3').value = "";
		document.getElementById('row8-4').value = "";
		document.getElementById('row8-6').value = "";
		document.getElementById('row8-7').value = "";
		document.getElementById('row8-8').value = "";
		document.getElementById('row8-9').value = "";
		document.getElementById('row9-2').value = "";
		document.getElementById('row9-3').value = "";
		document.getElementById('row9-5').value = "";
		document.getElementById('row9-7').value = "";
		document.getElementById('row9-8').value = "";
    }