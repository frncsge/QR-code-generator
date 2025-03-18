const generateBtn = document.getElementById("generate");
const saveBtn = document.getElementById("save");
var qr_img_container = document.getElementById("qr-img-container");

generateBtn.addEventListener("click", () => {
  const input = document.querySelector("input").value;
  qr_img_container.innerHTML = "";

  if (input === "") {
    alert("You haven't entered a URL:)");
  } else {
    new QRCode(qr_img_container, {
      text: input,
      width: 165,
      height: 165,
    });
  }
});

function downloadImg(src) {
  var link = document.createElement("a");
  link.href = src;
  link.download = "QR Image";
  qr_img_container.appendChild(link);
  link.click();
  qr_img_container.removeChild(link);
}

saveBtn.addEventListener("click", () => {
  let qrImg = qr_img_container.querySelector("img");
  let qrCanvas = qr_img_container.querySelector("canvas");

  if (qrImg) {
    downloadImg(qrImg.src);
  } else if (qrCanvas) {
    const qrCanvasToPng = qrCanvas.toDataURL("image/png");
    if (qrCanvasToPng) {
      downloadImg(qrCanvasToPng);
    }
  } else {
    alert("Generate a QR image first to save!");
  }
});
