const fileInput = document.getElementById("file-upload");
const fileNameDisplay = document.getElementById("file-name");
const clearFileButton = document.getElementById("clear-file");

// Update the file name when a file is selected
fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = fileInput.files[0].name;
    clearFileButton.style.display = "inline-block";
  } else {
    fileNameDisplay.textContent = "No file chosen";
    clearFileButton.style.display = "none";
  }
});

// Clear the selected file
clearFileButton.addEventListener("click", () => {
  fileInput.value = "";
  fileNameDisplay.textContent = "No file chosen";
  clearFileButton.style.display = "none";
});
