export default (context, inject) => {
  inject("hello", msg => {
    //   return msg;
    var QRCode = require("qrcode");
    let x = ""
    let op = { 
        errorCorrectionLevel: 'H' ,
        type:'image/webp',
        quality: 0.3,
        margin: 1,
        scale:4,
        color: {
            dark:"#010599FF",
            light:"#FFBF60FF"
          }
    }
    QRCode.toDataURL(msg,op, function(err, url) {
      x = String(url)
    });
    return x;
  });
};
