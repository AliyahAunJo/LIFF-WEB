$(document).ready(function() {
      var path = new URL(window.location);
      var liffId = path.searchParams.get('url');
        liff.init({
          liffId: "2000548624-JbxE982N" //วางLiffId ตรงนี้
        })
        .then(() => {
          if (liff.isInClient()) {
            if (liff.getOS() == "ios") {
              window.location.replace(""+liffId);                      
            } else if (liff.getOS() == "android") {
              window.location.replace(""+liffId);
            }

            setTimeout(function(){ liff.closeWindow(); }, 3000); //เปลี่ยนเวลาที่ต้องการ Redirect
          }
        })
        .catch((err) => {
        });
      });

  // Check if LIFF is initialized
if (liff.isInClient()) {
    // Add a click event listener to the close button
    document.getElementById("closeButton").addEventListener("click", function() {
        // Close the LIFF app when the button is clicked
        liff.closeWindow();
    });
} else {
    // Handle the case when the app is not running in the LINE app
    console.log("This app is not running in the LINE app.");
}
