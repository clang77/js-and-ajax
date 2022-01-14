function getData(dataSource) 
{
var connection = new XMLHttpRequest();
  connection.onreadystatechange = function()
  {
    if (connection.readyState == 4 && connection.status == 200) 
    {
        var data =  connection.responseText;
        console.log ("Status: " + connection.status);
        console.log ("Ready State: " + connection.readyState);
        console.log ("Data: " + data);
        
        var div = document.getElementById('details');
        div.innerHTML = data;
    }
  }
  connection.open("Get", dataSource);
  connection.send();

}