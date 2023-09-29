var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "javascript",
    lineNumbers:  false,
    theme: 'monokai',
    lineWrapping: true,
    scrollbarStyle: 'null'
});

download.onclick = async () => {
    const c = document.querySelector('.snippet-wrapper');

    domtoimage.toJpeg(c, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'code.jpeg';
        link.href = dataUrl;
        link.click();
    });
}
