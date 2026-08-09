


    /* =================================
       ELEMENTS
    ================================= */

    const emailBtn =
      document.getElementById("emailBtn");

    const emailModal =
      document.getElementById("emailModal");

    const closeEmail =
      document.getElementById("closeEmail");

    const emailForm =
      document.getElementById("emailForm");

    const emailInput =
      document.getElementById("email");

    const submitBtn =
      document.getElementById("submitBtn");

    const error =
      document.getElementById("error");

    const successModal =
      document.getElementById("successModal");

    const closeSuccess =
      document.getElementById("closeSuccess");

    const okBtn =
      document.getElementById("okBtn");


    /* =================================
       OPEN POPUP
    ================================= */

    emailBtn.addEventListener("click", function () {

      emailModal.style.display = "flex";

    });


    /* =================================
       CLOSE POPUP
    ================================= */

    closeEmail.addEventListener("click", function () {

      emailModal.style.display = "none";

    });


    /* =================================
       API CALL
    ================================= */

    emailForm.addEventListener("submit", async function (event) {

      event.preventDefault();


      const email =
        emailInput.value;


      submitBtn.disabled = true;

      submitBtn.innerText =
        "Sending...";


      try {


        /* =============================
           FETCH API
        ============================= */

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {

            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({

              email: email,

              pdf: "menu.pdf"

            })

          }
        );


        /* =============================
           CONVERT RESPONSE TO JSON
        ============================= */

        const data =
          await response.json();


        /* =============================
           CHECK RESPONSE
        ============================= */

        console.log("API Response:");

        console.log(data);


        if (response.ok) {


          /* Close email popup */

          emailModal.style.display =
            "none";


          /* Open success popup */

          successModal.style.display =
            "flex";


          /* Clear form */

          emailForm.reset();

        }


      } catch (err) {


        console.log("API Error:");

        console.log(err);


        error.innerText =
          "Something went wrong.";

      }


      submitBtn.disabled = false;

      submitBtn.innerText =
        "Get the Menu";

    });


    /* =================================
       CLOSE SUCCESS
    ================================= */

    closeSuccess.addEventListener("click", function () {

      successModal.style.display =
        "none";

    });


    okBtn.addEventListener("click", function () {

      successModal.style.display =
        "none";

    });
