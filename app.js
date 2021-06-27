 var firebaseConfig = {
    apiKey: "AIzaSyAQSkkuu1yo8MgO4m-IkmbY5JFdCeu1VoA",
    authDomain: "case-law-database.firebaseapp.com",
    projectId: "case-law-database",
    storageBucket: "case-law-database.appspot.com",
    messagingSenderId: "523926910114",
    appId: "1:523926910114:web:38188ad5cd0c7ac41493fb",
    measurementId: "G-RNCZXPFP98"
  };

 // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics(); 

//window.Onload = collectdata();
var postflag=0;
var curpost=0;
var lid=0;
var displayedpostno=0;
var flag=0;
var kflag=0; kkflag=0;
var tflag=0;
var totalpost=0;
var arttitle=[];
var art=[];
var artdate=[];
var artkey=[];
arttitle[0]="first";
arttitle[1]="second";
art[0]="first";
art[1]="second";
artdate[0]="first";
artdate[1]="second";
artkey[0]="first";
artkey[1]="second";
var k=0;
var articles=['first','second','third','five'];
var id='article';
var ii=0;

function createpost (title,date, article) {
if(kflag<=5 && displayedpostno<=totalpost){
	if(ii<=4 && flag==0) {
		console.log("flag is turned off");
		var newdiv=document.createElement('div');
		var newh1=document.createElement('h1');
		var newlabel=document.createElement('label');
		var newp=document.createElement('p');
		var btn1 =document.createElement('button');
		var btn2=document.createElement('button');
		var btn3=document.createElement('button');
		var dividval= "article"+ ii;
		newlabel.id= "newitem"+ ii;
		newlabel.className="newstitle";
		newdiv.id=dividval;
		newdiv.className="newsitem";
		newp.id="pnew"+ii;
		newp.innerHTML=article;
		newh1.innerHTML=title + "( " +date +" )";
		newlabel.innerHTML=title + "( " +date +" )";
		btn1.className="btnclass";
		btn2.className="btnclass";
		btn3.className="btnclass";
		btn1.innerHTML="like";
		btn2.innerHTML="Dislike";
		btn3.innerHTML="Comments";
		var pardiv=document.getElementById('articleholder');
		pardiv.appendChild(newdiv);
		var pardiv=document.getElementById(dividval);
		pardiv.appendChild(newlabel);
		pardiv.appendChild(newp);
		var newdiv2=document.createElement('div');
		var newdivid ="btngroup"+ii;
		newdiv2.id="btngroup"+ii;
		newdiv2.className="btnholder"
		pardiv.appendChild(newdiv2);
		var pardiv=document.getElementById(newdivid);
		pardiv.appendChild(btn3);
		pardiv.appendChild(btn2);
		pardiv.appendChild(btn1);
		ii=ii+1;
		displayedpostno=displayedpostno+1;
		console.log(displayedpostno,ii);
		kflag++;
		if(ii>=5) {
		flag=1;
		}
	}

	if(flag==1) {
		if(kkflag>4) {
			kkflag=0;
		}
		var labid ="newitem"+kkflag;
		var htmlval = document.getElementById(labid).innerHTML;
		var lab1=document.getElementById(labid);
		title1=title + "( " + date + " )";
		lab1.innerHTML=title1;
		var pid="pnew"+kkflag;
		var phold=document.getElementById(pid);
		phold.innerHTML=article;
		displayedpostno=displayedpostno+1;
		k++; kflag++; kkflag++;
	}
 }
 if(tflag==1 && totalpost==displayedpostno)
 {
 	displayedpostno=0;
 }
}


function collectdata(){
	sno=0;
		kflag=0; k1=0; postcount=0; ky={};
		firebase.database().ref('newsarticles/').orderByChild('Nid').limitToLast(5).once('value', function(snapshot){
		snapshot.forEach( 
					function(childsnapshot){
					let nid=childsnapshot.val().Nid;
					let ntitle=childsnapshot.val().Ntitle;
					let ndate=childsnapshot.val().Ndate;
					let nkeyword=childsnapshot.val().Nkeywords;
					let narticle=childsnapshot.val().Narticle;
					//writeTodoc(ntitle,ndate,narticle,nkeyword);
					art.push(narticle);
					arttitle.push(ntitle);
					artdate.push(ndate);
					artkey.push(nkeyword);
					writearr(k1,ntitle,ndate,narticle);
					k1++;
				}
			);
				
			})
		
	//console.log("totalpost" + totalpost);
	//console.log( "print : ", arttitle,artdate,art, art1);
	//loadarticle(arttitle,artdate,art);
}

function loadarticle() {
	collectdata();	
}

function writearr(iv,tit,dt,article){
		var labid ="newitem"+iv;
		var htmlval = document.getElementById(labid).innerHTML;
		var lab1=document.getElementById(labid);
		title1=tit + "( " + dt + " )";
		lab1.innerHTML=title1;
		var pid="pnew"+iv;
		var phold=document.getElementById(pid);
		phold.innerHTML=article;
		//reswap();
		//rearrange();
}

function rearrange(){
	kkarray=[];kkparray=[];
	for(i=0;i<10;i++){
	var labid ="newitem"+i;
	var htmlval = document.getElementById(labid).innerHTML;
	var pid="pnew"+i;
	var phold=document.getElementById(pid).innerHTML;
	kkarray[i]=(htmlval);
	kkparray[i]=(phold);
	console.log(kkarray,kkparray);
	}
	var sw=9;
	for(i=0;i<10;i++){
	var labid ="newitem"+sw;
	document.getElementById(labid).innerHTML = kkarray[i];
	var pid="pnew"+sw;
	document.getElementById(pid).innerHTML=kkparray[i];
	console.log(sw,i);
	sw=sw-1;
	}

}

function reswap(){
	let sw=5;
	for(i=0;i<=5;i++){
	var labid ="newitem"+i;
	var labid1 ="newitem"+sw;
	var htmlval = String(document.getElementById(labid).innerHTML);
	var htmlval1 = String(document.getElementById(labid1).innerHTML);
	var pid="pnew"+i;
	var pid1="pnew"+sw;
	var phold= String(document.getElementById(pid).innerHTML);
	var phold1=String(document.getElementById(pid1).innerHTML);
	document.getElementById(labid).innerHTML=htmlval1;
	document.getElementById(labid1).innerHTML=htmlval;
	document.getElementById(pid).innerHTML=phold1;
	document.getElementById(pid1).innerHTML=phold;
	console.log(labid,labid1);
	console.log(htmlval,htmlval1);
	//kkarray[i]=(htmlval);
	//kkparray[i]=(phold);
	//console.log(kkarray,kkparray);
	sw--;
	}
}



function cpholder() {
		for(ii=0;ii<=4;ii++) {
		var newdiv=document.createElement('div');
		var newh1=document.createElement('h1');
		var newlabel=document.createElement('label');
		var newp=document.createElement('p');
		var btn1 =document.createElement('button');
		var btn2=document.createElement('button');
		var btn3=document.createElement('button');
		var dividval= "article"+ ii;
		newlabel.id= "newitem"+ ii;
		newlabel.className="newstitle";
		newdiv.id=dividval;
		newdiv.className="newsitem";
		newp.id="pnew"+ii;
		btn1.className="btnclass";
		btn2.className="btnclass";
		btn3.className="btnclass";
		btn1.innerHTML="like";
		btn2.innerHTML="Dislike";
		btn3.innerHTML="Comments";
		var pardiv=document.getElementById('articleholder');
		pardiv.appendChild(newdiv);
		var pardiv=document.getElementById(dividval);
		pardiv.appendChild(newlabel);
		pardiv.appendChild(newp);
		var newdiv2=document.createElement('div');
		var newdivid ="btngroup"+ii;
		newdiv2.id="btngroup"+ii;
		newdiv2.className="btnholder"
		pardiv.appendChild(newdiv2);
		var pardiv=document.getElementById(newdivid);
		pardiv.appendChild(btn3);
		pardiv.appendChild(btn2);
		pardiv.appendChild(btn1);
		}
		loadarticle();
		//rearrange();
}


function writeTodoc(tit,dat,art,keywrd) {
	   if(postfilled<=5) {
		var labid ="newitem"+postid;
		var lab1=document.getElementById(labid);
		title1=title + "( " + date + " )";
		lab1.innerHTML=tit;
		var pid="pnew"+postid;
		var phold=document.getElementById(pid);
		phold.innerHTML=article;
		displayedpostno=displayedpostno+1;
		postid++, postfilled++;
		}

	}

