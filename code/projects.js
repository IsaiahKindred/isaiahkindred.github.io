function openwindow()
{
  var myDiv = document.getElementById("windowbackground");
  if (myDiv.style.display === "none") {
    myDiv.style.display = "absolute"; // Or "flex", "grid", etc., depending on your layout
  } else {
    myDiv.style.display = "none";
  }
};