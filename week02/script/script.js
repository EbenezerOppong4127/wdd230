document.addEventListener("DOMContentLoaded", function() {
    const chapterInput = document.getElementById("chapterInput");
    const addButton = document.getElementById("addButton");
    const chapterList = document.getElementById("chapterList");

    addButton.addEventListener("click", function() {
        // Check if input is not blank
        if (chapterInput.value.trim() !== "") {
            // Create list item and delete button
            const listItem = document.createElement("li");
            const deleteButton = document.createElement("button");

            // Set delete button content and aria-label
            deleteButton.textContent = "❌";
            deleteButton.setAttribute("aria-label", "Remove " + chapterInput.value);

            // Set list item text content
            listItem.textContent = chapterInput.value;

            // Append delete button to list item
            listItem.appendChild(deleteButton);

            // Append list item to list
            chapterList.appendChild(listItem);

            // Add event listener to delete button
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });

            // Clear input and focus
            chapterInput.value = "";
            chapterInput.focus();
        } else {
            // If input is blank, alert user and focus on input
            alert("Please enter a chapter.");
            chapterInput.focus();
        }
    });
});
