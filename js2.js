fact1_show()


function fact1_show () {
	document.getElementById("fact1").style.display="block";
	document.getElementById("fact2").style.display="none";
	document.getElementById("fact3").style.display="none";
	document.getElementById("fact4").style.display="none";
	document.getElementById("fact5").style.display="none";
	document.getElementById("fact6").style.display="none";
	document.getElementById("fact7").style.display="none";
	setTimeout(fact2_show , 5000);
}

function fact2_show () {
	document.getElementById("fact1").style.display="none";
	document.getElementById("fact2").style.display="block";
	document.getElementById("fact3").style.display="none";
	document.getElementById("fact4").style.display="none";
	document.getElementById("fact5").style.display="none";
	document.getElementById("fact6").style.display="none";
	document.getElementById("fact7").style.display="none";
	setTimeout(fact3_show , 5000);
}

function fact3_show () {
	document.getElementById("fact1").style.display="none";
	document.getElementById("fact2").style.display="none";
	document.getElementById("fact3").style.display="block";
	document.getElementById("fact4").style.display="none";
	document.getElementById("fact5").style.display="none";
	document.getElementById("fact6").style.display="none";
	document.getElementById("fact7").style.display="none";
	setTimeout(fact4_show , 5000);
}

function fact4_show () {
	document.getElementById("fact1").style.display="none";
	document.getElementById("fact2").style.display="none";
	document.getElementById("fact3").style.display="none";
	document.getElementById("fact4").style.display="block";
	document.getElementById("fact5").style.display="none";
	document.getElementById("fact6").style.display="none";
	document.getElementById("fact7").style.display="none";
	setTimeout(fact5_show , 5000);
}

function fact5_show () {
	document.getElementById("fact1").style.display="none";
	document.getElementById("fact2").style.display="none";
	document.getElementById("fact3").style.display="none";
	document.getElementById("fact4").style.display="none";
	document.getElementById("fact5").style.display="block";
	document.getElementById("fact6").style.display="none";
	document.getElementById("fact7").style.display="none";
	setTimeout(fact6_show , 5000);
}

function fact6_show () {
	document.getElementById("fact1").style.display="none";
	document.getElementById("fact2").style.display="none";
	document.getElementById("fact3").style.display="none";
	document.getElementById("fact4").style.display="none";
	document.getElementById("fact5").style.display="none";
	document.getElementById("fact6").style.display="block";
	document.getElementById("fact7").style.display="none";
	setTimeout(fact7_show , 5000);
}

function fact7_show () {
	document.getElementById("fact1").style.display="none";
	document.getElementById("fact2").style.display="none";
	document.getElementById("fact3").style.display="none";
	document.getElementById("fact4").style.display="none";
	document.getElementById("fact5").style.display="none";
	document.getElementById("fact6").style.display="none";
	document.getElementById("fact7").style.display="block";
	setTimeout(fact1_show , 5000);
}

