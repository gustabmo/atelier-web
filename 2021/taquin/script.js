
function CasesMobiles(x,y) {
	var cases = [] ;
	if (x>1) {
		cases.push([x-1,y]) ;
	}
	if (y<4) {
		cases.push([x,y+1]) ;
	}
	if (x<4) {
		cases.push([x+1,y]) ;
	}
	if (y>1) {
		cases.push([x,y-1]) ;
	}
	return cases ;
}

function ActiverCases(x,y) {
	ca=CasesMobiles(x,y)  ;
	for ( var i = 0; i < ca.length; i++) {
		cell=document.getElementById(ca[i][0]+'-'+ca[i][1]) ;
		cell.className="active" ;
		fonction="ViderCase("+ca[i][0]+','+ca[i][1]+')' ;
		cell.setAttribute('onclick',fonction) ;
	}
}

function InactiverCases(x,y) {
	ca=CasesMobiles(x,y)  ;
	for ( var i = 0; i < ca.length; i++) {
		cell=document.getElementById(ca[i][0]+'-'+ca[i][1]) ;
		cell.className="inactive" ;
		cell.removeAttribute('onclick') ;
	}
}

var xVide = 4 ; yVide=1 ;

function ViderCase(x,y) {
	// console.log('Il faut vider ' + x + ', ' + y );
	cell=document.getElementById(x+'-'+y) ;
	vide=document.getElementById(xVide+'-'+yVide) ;
	vide.innerHTML=cell.innerHTML ;
	cell.innerHTML='' ;
	InactiverCases(xVide,yVide) ;
	xVide = x ; yVide = y ;
	ActiverCases(x,y) ;
}



for (var x=1;x<5;x++) {
	for (var y=1;y<5;y++) {
		cell=document.getElementById(x+'-'+y) ;
		cell.className="inactive" ;
		if (x==4 && y==1) {continue;}
		cell.innerHTML=(4-y)*4+x ;
	}
}

ActiverCases(xVide,yVide)

function melanger() {
	for (var i=0; i<500 ; i++) {
		var ca=CasesMobiles(xVide,yVide)  ;
		var l = ca.length ;
		choix = ca[Math.floor(l*Math.random())];
		ViderCase(choix[0],choix[1]) ;
	}
	
	 
}