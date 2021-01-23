var user = {};
    var usersList = [];
    var userIdCount = 1;
    var loggedInUserDetails;
    var logincount ;
    var logincount1 ;
    var usercount;

    var attempt=0;
    //onclick of create account form
    function createAccount(){
        debugger;
        if (document.f2.vam3.value== "" || document.f2.vam3.value == null){

            $("#name3").removeClass("hide");
        }
        else{
          debugger;
            console.log("firstname: " + $("#firstname").val());
        }

        if (document.f2.vam4.value== "" || document.f2.vam4.value == null){
            $("#name4").removeClass("hide");
        }
        else
        {debugger;
            console.log("lastname: " + $("#lastname").val());
        }
        if (document.f2.email.value== "" || document.f2.email.value == null){
            debugger;
            $("#email2").removeClass("hide");
        }
        else if(document.f2.email.value.includes("@") && document.f2.email.value.endsWith(".com"))
        {
            debugger;
            console.log("email: " + $("#email1").val());
        }
        else
        {
            debugger;
            $("#email3").removeClass("hide");
        }

        if (document.f2.vam5.value== "" || document.f2.vam5.value == null){
            $("#name5").removeClass("hide");
        }
        else
        {
            console.log("password1: " + $("#password1").val());
        }
        if (document.f2.vam6.value== "" || document.f2.vam6.value == null){
            $("#name6").removeClass("hide");
        }
        else
        {
            console.log("password2: " + $("#password2").val());
        }
        if(document.f2.vam5.value !== document.f2.vam6.value)
        {
            $("#pass").removeClass("hide");
        }
        if (document.f2.vam7.value== "" || document.f2.vam7.value == null){
            $("#name7").removeClass("hide");
        }
        else
        {
            console.log("age: " + $("#age").val());
        }
        if (document.f2.gender.value== ""){
            $("#name8").removeClass("hide");
        }
        else if(document.f2.gender.value!== "female")
        {
            console.log("gender: " + $("#gender").val());
        }
        else
        {
            console.log("gender: " + $("#gender1").val());
        }
        if (document.f2.hero.value== ""|| document.f2.hero.value == null){
            $("#name9").removeClass("hide");
        }
        else
        {
            console.log("hero: " + $("#hero").val());
        }


        if(document.f2.gender.value!== "female")
                {
                    user = {
                        userId : userIdCount,
                        Firstname : $("#firstname").val(),
                        Lastname:  $("#lastname").val(),
                        email: $("#email1").val(),
                        password: $("#password1").val(),
                        age: $("#age").val(),
                        gender: $("#gender").val(),
                        favorite : $("#hero").val(),
                        isAdmin : $("#admin:checked").length === 1 ? true : false

                    }
                }
                else
                {
                user = {
                    userId : userIdCount,
                    Firstname : $("#firstname").val(),
                    Lastname:  $("#lastname").val(),
                    email: $("#email1").val(),
                    password: $("#password1").val(),
                    age: $("#age").val(),
                    gender: $("#gender1").val(),
                    favorite : $("#hero").val(),
                    game: [],
                    isAdmin : $("#admin:checked").length === 1 ? true : false

                }
            }
                if( usersList.length !==0 && usersList.filter(x=>x.email==$("#email1").val()).length!==0 ){
                    var a= $("#email1").val();
                    window.alert("The email id " + a  + " Already Exist");
                }

                else if(document.f2.vam5.value !== document.f2.vam6.value)
                {
                    window.alert("password does not match");
                }
                else if(document.f2.gender.value== ""|| document.f2.gender.value == null)
                {
                      window.alert("fill the all field");
                }
                else if(document.f2.vam3.value== "" || document.f2.vam3.value == null)
                {
                      window.alert("fill first name");
                }
                else if(document.f2.vam4.value== "" || document.f2.vam4.value == null)
                {
                      window.alert("fill last name");
                }
                else if(document.f2.email.value== "" || document.f2.email.value == null)
                {
                    window.alert("fill email");
                }
                else if(document.f2.email.value.includes("@") && document.f2.email.value.endsWith(".com"))
                {

                usersList.push(user);
                userIdCount++;
                console.log(usersList);
                window.alert("Account created!");

                }
            }



    //Method for Login into system

        function login(){
        var i;
        var isUserLoggedIn = false;

        var  pass1  = false;
        if(usersList.length === 0){
            alert("The user not exist");
        } else {
            for(i = 0; i < usersList.length; i++) {
                if(usersList[i].email === $("#lemail").val() && usersList[i].password === $("#lpassword").val()){
                    isUserLoggedIn = true;
                    loggedInUserDetails = usersList[i];
                }
                 else if (usersList[i].email === $("#lemail").val() && usersList[i].password !== $("#lpassword").val()){
                     window.alert("Password doesnot match");
                     pass1 = true ;
                 }

            }
            if(isUserLoggedIn === true){
                $("#userListTable tbody").html(""); //Remove the existing content in the element
                 $(".pages").addClass('hide');


                //console.log("selected user details object" + loggedInUserDetails);
                if(loggedInUserDetails.isAdmin){
                    //$(".homePage").removeClass('hide');
                    $(".homePage2").removeClass('hide');
                    $("#welcomeMessage2").text("Welcome Admin " + loggedInUserDetails.Firstname + " " + loggedInUserDetails.Lastname);
                    logincount = 1 ;
                    logincount1 =1;

                } else {
                    usercount=1;
                    $(".homePage1").removeClass('hide');
                    $("#welcomeMessage4").text("Welcome  " + loggedInUserDetails.Firstname + " " + loggedInUserDetails.Lastname);

                    $("#userListTable tbody").append("<tr><td>" + loggedInUserDetails.Firstname + "</td><td>" + loggedInUserDetails.Lastname + "</td><td>" + loggedInUserDetails.email + "</td><td>" + loggedInUserDetails.age + "</td><td>"+  loggedInUserDetails.isAdmin + "</td><td>"+
                        "<a href='javascript:void(0)' onclick='openEditUserModal1(this)'>Change password</a></td></tr>");
                     }
                $(".logoutLink").removeClass("hide");
                $(".loginLink").addClass("hide");

            }
            else if(pass1 !== true){
                alert("Please enter the valid credentials");
            }
        }
    }
    function logout(){

        $(".loginLink").removeClass("hide");
        $(".logoutLink").addClass("hide");
        $(".pages").addClass('hide');
        $(".loginPage").removeClass("hide");
        $("#loginEmail, #loginPassword").val("");
    }

    //Deleting the user
    function deleteUser(thisObj){
        console.log("Before deleted" + usersList);
        var selectedUserElement = $(thisObj).parents("tr").attr("id");
        $("#" + selectedUserElement).remove();
        var index = usersList.findIndex(function(element){
            return element.userId == parseInt(selectedUserElement);
        })
        if(index !== -1){
            usersList.splice(index, 1);
        }
        console.log("After deleted" + usersList);
    }
// method for change password
function editpassword(){
    if( $("#currentpassword").val() ===loggedInUserDetails.password )
    { debugger;
        if( $("#changepassword").val()===$("#changepassword1").val())
    { debugger;

        loggedInUserDetails.password = $("#changepassword").val()
        usersList.password = $("#changepassword").val();
        attempt--;
        debugger;
        window.alert("password changed successfully !");

        $("#editUserModal1").modal("hide");
        debugger;
        debugger;
     }
    else
    { debugger;
        $("#pass6").removeClass("hide");

    }
    }
    else{  debugger;
        $("#pass5").removeClass("hide");

    }
}

 /// opening the edit user model for changing password
    function openEditUserModal1(thisObj){
            attempt++;
        $("#editUserModal1").modal("show");
              }
    //Method for opening the edit user modal popup
    function openEditUserModal(thisObj){
        $("#editUserModal").modal("show");
        var selectedUserId = $(thisObj).parents("tr").attr("id");
        $(".selectedEditUserId").text(selectedUserId);
        var userDetail = usersList.filter(obj => {
            return obj.userId == parseInt(selectedUserId)
        });
        if(userDetail.length !== 0){
            $("#firstNameEdit").val(userDetail[0].firstName);
            $("#lastNameEdit").val(userDetail[0].lastName);
            $("#emailEdit").val(userDetail[0].email);
            $("#ageEdit").val(userDetail[0].age);
        }
    }

    function editUser(){

        var selectedUserId = parseInt($(".selectedEditUserId").text());
        $("tr#" + selectedUserId + " .firstNameColumn").text($("#firstNameEdit").val());
        $("tr#" + selectedUserId + " .lastNameColumn").text($("#lastNameEdit").val());
        $("tr#" + selectedUserId + " .emailColumn").text($("#emailEdit").val());
        $("tr#" + selectedUserId + " .ageColumn").text($("#ageEdit").val());
        var index = usersList.findIndex(function(element){
            return element.userId == parseInt(selectedUserId);
        })
        if(index !== -1){
            usersList[index].firstName = $("#firstNameEdit").val();
            usersList[index].lastName = $("#lastNameEdit").val();
            usersList[index].email = $("#emailEdit").val();
            usersList[index].age = $("#ageEdit").val();
        } else{
            alert("The selected user not found");
        }
        $("#editUserModal").modal("hide");

    }
    $(document).ready(function(){
        $(".createAccountLink").click(function(){
            $(".pages").addClass('hide');
            $(".createAccountPage").removeClass("hide");
            $(".nav li").removeClass("active");
            $(this).addClass("active"); //$(".createAccountLink").addClass("active");

        });
        $(".loginLink").click(function(){
            $(".pages").addClass('hide');
            $(".loginPage").removeClass("hide");
            $(".nav li").removeClass("active");
            $(this).addClass("active"); //$(".loginLink").addClass("active");

        });
    })

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      function openNav1() {
        document.getElementById("mySidenav1").style.width = "250px";
      }

      function closeNav1() {
        document.getElementById("mySidenav1").style.width = "0";
      }
      function openNav2() {
        document.getElementById("mySidenav2").style.width = "250px";
      }

      function closeNav2() {
        document.getElementById("mySidenav2").style.width = "0";
      }
 function users(){
         $(".homePage").removeClass('hide');
         $(".homePage2").addClass('hide');
         $(".homePage4").addClass('hide'); debugger;
      if(logincount1===1){
        for(i = 0; i < usersList.length; i++) {
            $("#userListTable tbody").append("<tr id='" + usersList[i].userId + "'><td class='firstNameColumn'>" + usersList[i].Firstname + "</td><td class='lastNameColumn'>" + usersList[i].Lastname + "</td><td class='emailColumn'>"+ usersList[i].email + "</td><td class='ageColumn'>" + usersList[i].age +"</td><td>"+
            "<a href='javascript:void(0)' onclick='openEditUserModal(this)'>Edit</a>   <a href='javascript:void(0)' onclick='deleteUser(this)'>Delete</a></td></tr>");
       }
      }
      logincount1++;

    }



function myaccount(){
    $(".homePage2").addClass('hide');debugger;
    $(".homePage4").removeClass('hide'); debugger;
    $(".homePage").addClass('hide');
    $("#welcomeMessage6").text("Welcome" + loggedInUserDetails.Firstname + " " + loggedInUserDetails.Lastname);
    debugger;
    if(logincount === 1 ){

    $("#userListTable2 tbody").append("<tr><td>" + loggedInUserDetails.Firstname + "</td><td>" + loggedInUserDetails.Lastname + "</td><td>" + loggedInUserDetails.email + "</td><td>" + loggedInUserDetails.age +  "</td><td>"+ loggedInUserDetails.isAdmin + "</td><td>"+
    "<a href='javascript:void(0)' onclick='openEditUserModal1(this)'>Change password</a></td></tr>");debugger;
    }
    logincount++;
     }
 
