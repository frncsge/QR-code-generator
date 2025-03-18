const generateBtn = document.getElementById("generate");
const saveBtn = document.getElementById("save");
var qr_img_container = document.getElementById("qr-img-container");

generateBtn.addEventListener("click", () => {
  const input = document.querySelector("input").value;
  qr_img_container.innerHTML = "";
  new QRCode(qr_img_container, {
    text: input,
    width: 165,
    height: 165,
  });
});

function downloadImg(src) {
  var link = document.createElement("a");
  link.href = src;
  link.download = "QR Image";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

saveBtn.addEventListener("click", () => {
  let qrImg = qr_img_container.querySelector("img");
  let qrCanvas = qr_img_container.querySelector("canvas");

  if (qrImg) {
    downloadImg(qrImg.src);
  } else if (qrCanvas) {
    const qrCanvasToPng = qrCanvas.toDataURL("image/png");
    downloadImg(qrCanvasToPng);
  } else {
    alert("Generate a QR image first to save!");
  }
});
