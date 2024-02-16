document.getElementById("uploadForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  
  var fileInput = document.getElementById("documentInput");
  var file = fileInput.files[0]; // Get the selected file
  
  var selectedAPI = document.querySelector('input[name="api"]:checked').value; // Get the selected API
  
  if (file) {
      var formData = new FormData(); // Create form data object
      formData.append("file", file); // Append the file to the form data

      // Define the selected ML API endpoint URL
      var apiUrl = "";

      if (selectedAPI === "api1") {
          apiUrl = "http://api1.example.com/predict";
      } else if (selectedAPI === "api2") {
          apiUrl = "http://api2.example.com/predict";
      } // Add more conditions for additional APIs if needed

      // Send the document as a POST request to the selected ML API
      fetch(apiUrl, {
          method: "POST",
          body: formData
      })
      .then(response => {
          if (response.ok) {
              return response.json();
          }
          throw new Error("Error in ML API response");
      })
      .then(data => {
          // Handle the response from the ML API
          console.log("ML API response:", data);
          alert("Document successfully uploaded and processed by the ML API!");
      })
      .catch(error => {
          console.error("Error:", error);
          alert("Error uploading document: " + error.message);
      });
  } else {
      alert("Please select a document to upload.");
  }
});
