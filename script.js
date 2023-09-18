var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "javascript",
    lineNumbers: true,
    theme: 'monokai',
});
// editor.setOptions('theme', )
// editor.save()

document.onclick = async event => {
    const c = document.querySelector('body');
    html2canvas(c, { allowTaint: true}).then( canvas => {
        // document.body.appendChild(canvas);
       // var link = document.createElement("a");
       //  document.body.appendChild(link);
       //  link.download = "html_image.jpg";
       //  link.href = canvas.toDataURL();
       //  link.target = '_blank';
       //  link.click(); 
    });
}
