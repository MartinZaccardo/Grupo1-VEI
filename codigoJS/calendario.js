document.addEventListener("DOMContentLoaded", function() {
    const calendarInput = document.getElementById("calendar");
    const today = new Date().toISOString().split("T")[0];
    calendarInput.setAttribute("min", today);
});