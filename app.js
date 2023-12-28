/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with a failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// Handle the resolved or rejected states of the promise

// Call getList
getList()
  // If the promise resolves with the list of hobbits
  .then((hobbits) => {
    // Render the list of hobbits as list items within the unordered list with id="list"
    const listUl = document.getElementById("list");
    hobbits.forEach((hobbit) => {
      const li = document.createElement("li");
      li.textContent = hobbit;
      listUl.appendChild(li);
    });
  })
  // If the promise rejects with the failure object
  .catch((failure) => {
    // Display the failure message in the paragraph element with id="error"
    const errorParagraph = document.getElementById("error");
    errorParagraph.textContent = failure.message;
  });
