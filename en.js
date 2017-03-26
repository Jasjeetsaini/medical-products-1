
function asd(){

var a=document.form.name;
if(a.value ==""){
alert("Please Enter Full Name");
document.getElementById("na").focus();
return false;
}
if(!allLetter(a)){
alert("Please Enter Only Character");
document.getElementById("na").focus();
return false;
}
var b=document.form.contact;
if(b.value ==""){
alert("Please Enter Contact Number");
document.getElementById("ca").focus();
return false;
}
if(!allnumeric(b)){
alert("Please Enter Only digits");
document.getElementById("ca").focus();
return false;
}

var c=document.form.emailid;
if(c.value ==""){
alert("Please Enter EmailId");
document.getElementById("e1").focus();
return false;
}
if (! ValidateEmail(c)) {
		 alert('Please input valid Email ID!!!');
      return false;
	}

var d=document.form.companyname;
if(d.value ==""){
alert("Please Enter Company Name");
document.getElementById("comp1").focus();
return false;
}
if(!allLetter(d)){
alert("Enter Only Character");
document.getElementById("comp1").focus();
return false;
}

var e=document.form.address;
if(e.value ==""){
alert("Please Enter Full Name");
document.getElementById("add1").focus();
return false;
}

var f=document.form.pincode;
if(f.value ==""){
alert("Please Enter Full Name");
document.getElementById("pin").focus();
return false;
}

var g=document.form.product.selectedIndex;
if(g == 0){
alert("Please Select Product Type");
document.getElementById("pro").focus();
return false;
}

var h=document.form.productid;
if( h.value== ""){
alert("Please Enter Product ID");
document.getElementById("pid").focus();
return false;
}
if(!allnumeric(h)){
alert("Please Enter Only digits");
document.getElementById("pid").focus();
return false;
}

var i=document.form.productquantity;
if(i.value == ""){
alert("Please Enter Quantity");
document.getElementById("qid").focus();
return false;
}

var j = document.form.query;
if(j.value == ""){
alert("Please Enter Querry");
document.getElementById("qu1").focus();
return false;
}

}
 function allLetter(inputtxt)
                {
                 var letters = /^[A-Za-z]+$/;
                 if(inputtxt.value.match(letters))
                   {
              	     return true;
                   }
                 else
                   {
              	     return false;
                   }
                }


            function allnumeric(inputtxt)
               {
                  var numbers = /^[0-9]+$/;
                  if(inputtxt.value.match(numbers))
                  {
                    return true;
                  }
                  else
                  {
                    return false;
                  }
               }
			   function ValidateEmail(inputText)
			 {
				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
				if(inputText.value.match(mailformat))
					{
					
					return true;
					}
				else
					{
					return false;
					}
			}
