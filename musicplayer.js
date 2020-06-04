

let carsoulbtn  = document.getElementById('s1');

function carsoulanimation()
{

	
	if(carsoulbtn.id==='s1')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s2';
	}else if (carsoulbtn.id==='s2')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s3';
	}else if (carsoulbtn.id==='s3')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s4';
	}
	else if (carsoulbtn.id==='s4')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s5';
	}
	else if (carsoulbtn.id==='s5')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s6';
	}
	else if (carsoulbtn.id==='s6')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s7';
	}
	else if (carsoulbtn.id==='s7')
	{
		carsoulbtn.checked=true;
		carsoulbtn.id='s1';
	}
	
	
	
}

setInterval(carsoulanimation,2000);

