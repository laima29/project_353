
FirebaseUser user=FirebaseAuth.getInstanace().getCurrentUsre();
if(user1=null){

}
else{

}
function post(){
var cname = document.getElementById("cname").value;
var jtitle = document.getElementById("jobtitle"y).value;
var subject = document.getElementById("subject").value;
var city = document.getElementById("city").value;
var jtype = document.getElementById("jtype").value;
var salary = document.getElementById("salary").value;
var exp = document.getElementById("exp").value;
var licence = document.getElementById("licence").value;
var elevel = document.getElementById("elevel").value;
var language = document.getElementById("language").value;

var employerRef = firebase.database().ref("Employer").child("");
nameRef.on('value',function(snapshot){
  nameTitle.innerHTML = snapshot.key + ": ";
  nameText.innerHTML = snapshot.val();
});

//function to make profile editable
function makeEditable(){
  nameText.contentEditable = true;
  nameText.style.backgroundColor="yellow";
  document.getElementById("post").style.display="inline"
}

//changes values in the database
function saveChanges(){
  var firebaseRef = firebase.database().ref();
  //var key = firebaseRef.push().key;
  var update = {};
  update["fbEmployer"]={
    Name: nameText.innerHTML
  }
  firebaseRef.update(update);
  //console.log(nameText.innerHTML);
  nameText.contentEditable = false;
  nameText.style.backgroundColor="white";
  document.getElementById("post").style.display="none";

  var companyName = document.getElementById("cname").value;
  document.getElementById("companyName").innerHTML=companyName;
}
/*$(document).ready(function() {
  $("#driver").click(function(event){
       $.getJSON('student.json', function(data) {
              $('#tester').html('<div> Name: ' +data.name);
              $('#tester1').html('<div> Course: ' +data.courseType+'</div>');
       });
    });
});*/
function writeUserData(de,comn el, fe, ct, le, cn, pd, lc, ed, la) {
	var obj = {datatype:de, cname:comn, jtitle:el, subject:fe, city:ct, jtype:le, salary:cn, exp:pd, licence:lc,elevel:ed, language:la};
	document.getElementById("menu2").innerHTML = obj[Object.keys(obj)[0]] + '/' + obj[Object.keys(obj)[1]];
  firebase.database().ref(obj[Object.keys(obj)[0]] + '/' + obj[Object.keys(obj)[1]]).set(obj);

}

writeUserData("Employer", cname, jtitle, subject, city, jtype, salary, exp, licence, elevel, language);




}
