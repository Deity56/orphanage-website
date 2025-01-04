document.getElementById("donate-button").addEventListener("click", function () {
    const name = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
    const telephone = document.getElementById("telephone").value;

    
    if (!name || !email || !amount || amount <= 0) {
        alert("Please fill all fields with valid data.");
        return;
    }

    
    const popup = document.createElement("div");
    popup.classList.add("popup-container");
    popup.innerHTML = `
        <div class="popup">
            <h2>Bank Payment Details</h2>
            <p><strong>Bank Name:</strong> United bank of Africa</p>
            <p><strong>Account Number:</strong> 2304590535</p>
            <p><strong>Bic/Swift:</strong> UNAFNGLA228</p>
            <p><strong>Bank Number:</strong> Uromi 311115</p>
            <p><strong>Account Holder Name:</strong>  Deborah Obehi Nosahkale</p>
            <button id="confirm-payment">I Have Paid</button>
            <button id="close-popup">Cancel</button>
        </div>
    `;
    document.body.appendChild(popup);

   
    document.getElementById("confirm-payment").addEventListener("click", function () {
       
        popup.remove();

       
        emailjs
            .send("service_dybuu9q", "template_oz1o818", {
                full_name: name,
                email: email,
                amount: amount,
                telephone: telephone || "N/A", 
            })
            .then(
                function (response) {
                    alert("Payment confirmation sent successfully!");
                },
                function (error) {
                    console.error("Error:", error);
                    alert("Failed to send payment confirmation. Please try again.");
                }
            );
    });

   
    document.getElementById("close-popup").addEventListener("click", function () {
        popup.remove();
    });
});
