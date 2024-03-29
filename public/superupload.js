$(document).ready(function() {
  document.getElementById('the-file').onchange = function () {
    var fileInput = document.getElementById('the-file');
    var file = fileInput.files[0];

    var xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('loadstart', onloadstartHandler, false);
    xhr.upload.addEventListener('progress', onprogressHandler, false);
    xhr.upload.addEventListener('load', onloadHandler, false);
    xhr.addEventListener('readystatechange', onreadystatechangeHandler, false);
    xhr.open('POST', '/', true);
    xhr.setRequestHeader("Content-Type", "application/octet-stream");
    xhr.setRequestHeader("X-File-Name", file.name);
    xhr.send(file); // Simple!

    function onloadstartHandler(evt) {
        $('#upload-status').html('Upload started!');
    }

    function onloadHandler(evt) {
        $('#upload-status').html('Upload successful!');
    }

    function onprogressHandler(evt) {
        var percent = evt.loaded/evt.total*100;
        $('#progress').html('Progress: ' + percent.toFixed(2) + '%');
    }
    
    function onreadystatechangeHandler(evt) {
        var status = null;

        try {
            status = evt.target.status;
        }
        catch(e) {
            return;
        }

        if (status == '200' && evt.target.responseText) {
          $('#result').html('<p>The server saw it as:</p><pre>' + evt.target.responseText + '</pre>');
        }
    }
  }
});