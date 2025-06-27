document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const confirmation = document.getElementById("confirmation");
  confirmation.innerHTML = `
    <strong>Booking Confirmed!</strong><br>
    Thank you <b>${name}</b> for booking a <b>${service}</b> on <b>${date}</b> at <b>${time}</b>.<br>
    A confirmation email will be sent to <b>${email}</b>.
  `;
  confirmation.style.display = "block";
  document.getElementById("bookingForm").reset();
});
