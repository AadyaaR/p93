function addUser()
{
 userName = document.getElementById("name").value;
 localStorage.setItem("username",userName);
 window.location = "kwitter_room.html";
}