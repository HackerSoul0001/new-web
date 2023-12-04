const form = document.querySelector('form')
const Fullname = document.getElementById('Name');
const Emailid = document.getElementById('email');
const PhoneNo = document.getElementById('phone');
const subject = document.getElementById('subject');
const massage = document.getElementById('massage');

  function sendEmail() {
const bodyMassage =`Full Name: ${Fullname.value}<br> Email: ${Emailid.value}<br> Phone No: ${PhoneNo.value}<br> Subject: ${subject.value}<br> Massage: ${massage.value}`;

      Email.send({
      Host : "smtp.elasticemail.com",
      Username : "tarunkumar00000012@gmail.com",
      Password : "32030B034D3F02A09C986005E131FF3D8F9E",
      To : 'tarunkumar00000012@gmail.com',
      From : "tarunkumar00000012@gmail.com",
      Subject : subject.value,
      Body : bodyMassage
  }).then(
    message => alert('sent successfully')
  );
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
  })

