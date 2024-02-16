document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var fileInput = document.getElementById("documentInput");
    var file = fileInput.files[0]; // Get the selected file
    
    if (file) {
      var formData = new FormData(); // Create form data object
      formData.append("document", file); // Append the file to the form data
  
      // Define the ML API endpoint URL
      var apiUrl = "http://18.118.85.67:3000/image_size";
  
      // Send the document as a POST request to the ML API
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