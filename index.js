window.addEventListener("load", function(){
  var qrCode = new QRCode(document.getElementById("qr_code"), {
    text: "https://www.frontendmentor.io/",
    width: 160,
    height: 160,
    colorDark: "#fff",
    colorLight: "#2C7DFA",
  });
});