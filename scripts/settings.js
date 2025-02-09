
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const settings = document.getElementById("settings");
const dropdown = document.getElementById("myDropdown");

function handleButtonClick(event) {
    console.log("dropdown clicked");
    dropdown.classList.toggle("show");

    dropdown.addEventListener('click', function (event) {
        if (event.target.classList.contains('toggle-3010')) {
            console.log("button clicked for 3010");
        }
    })
}

// click listener that shows the list of options
settings.addEventListener('click', handleButtonClick)
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('#dropdown__item')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }

        // additionally remove the event listener for dropdown buttons
        dropdown.removeEventListener('click', handleButtonClick);
    }
} 

