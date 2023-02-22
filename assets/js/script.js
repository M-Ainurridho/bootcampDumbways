function sendEmail(time) {
   const name = document.getElementById("name").value;
   const phone = document.getElementById("phone").value;
   const subject = document.getElementById("subject").value;
   const message = document.getElementById("message").value;

   if (!name || !subject || !message) {
      return alert("Harap isi semua data!");
   }

   const emailDestionation = "m.ainurridho11@gmail.com";
   document.location.href = `mailto:${emailDestionation}?subject=I'm ${subject}&body=Hello i'm ${name}, ${message} or you can call me, if you are in the sam e country (${phone})`;
}
