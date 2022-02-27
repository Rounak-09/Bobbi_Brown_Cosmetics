function signup(){

    var userDetails = JSON.parse(localStorage.getItem("userDetails")) || [];

    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email_id = document.getElementById('email_id').value;
    var dd = document.getElementById('dd').value;
    var mm = document.getElementById('mm').value;
    var mobile_no = document.getElementById('mobile_no').value;
    var zip_code = document.getElementById('zip_code').value;
    
    var userObj = {
        first_name:first_name,
        last_name:last_name,
        email_id:email_id,
        dd:dd,
        mm:mm,
        mobile_no:mobile_no,
        zip_code:zip_code
    }

    userDetails.push(userObj);
    
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    document.getElementById('first_name').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('email_id').value = '';
    document.getElementById('dd').value = '';
    document.getElementById('mm').value ='';
    document.getElementById('mobile_no').value = '';
    document.getElementById('zip_code').value = '';

    alert("Email signup successful.");  
}