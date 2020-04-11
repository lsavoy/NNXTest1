var firebaseConfig = 
{
    apiKey: "AIzaSyD-UpEuno-Zp0XhnGwK3TgQNAVPO-AsF3g",
    authDomain: "science-center-60214.firebaseapp.com",
    databaseURL: "https://science-center-60214.firebaseio.com",
    projectId: "science-center-60214",
    storageBucket: "science-center-60214.appspot.com",
    messagingSenderId: "656636128723",
    appId: "1:656636128723:web:bf6fcd80ddd76a1910d326",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.auth.Auth.Persistence.LOCAL;


  $("#btn-login").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != "" && password != "")
      {
            var result = firebase.auth().signInWithEmailAndPassword(email, password);

            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);
            });
      }
      else
      {
          window.alert("Secure NNX Access Only: Attempt Logged");
      }
});




$("#btn-signup").click(function()
{
    var email = $("#email").val();
    var password = $("#password").val();
    var cPassword = $("#confirmPassword").val();

    if(email != "" && password != "" && cPassword != "")
    {
        if(password == cPassword)
        {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;
  
                console.log(errorCode);
                console.log(errorMessage);
  
                window.alert("Message : " + errorMessage);
            });
        }
        else
        {
            window.alert("Passwords Do Not Match. Please Re-Enter.");
        }
    }
    else
    {
        window.alert("Secure NNX Access Only: Attempt Logged");
    }
});



    $("#btn-resetPassword").click(function()
    {
        var auth = firebase.auth();
        var email = $("#email").val();

    if(email != "")
    {
        auth.sendPasswordResetEmail(email).then(function()
        {
            window.alert("Email has been sent to your NNX inbox.");
        })
        .catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
        });
    }
    else
    {
        window.alert("First, enter your email.")
    }
  });
      


  $("#btn-logout").click(function()
  {
    firebase.auth().signOut();
  });

