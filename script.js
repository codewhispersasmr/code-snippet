var editor = CodeMirror.fromTextArea(document.getElementById('editor'), {
    mode: "javascript",
    lineNumbers: true,
    theme: 'monokai',
});
// editor.setOptions('theme', )
// editor.save()

document.onclick = async event => {
    const c = document.querySelector('body');

    // domtoimage.toJpeg(c, { quality: 0.95 })
    // .then(function (dataUrl) {
    //     var link = document.createElement('a');
    //     link.download = 'my-image-name.jpeg';
    //     link.href = dataUrl;
    //     link.click();
    // });
}

language.onchange = event => {
    const lang = language.value;
    console.log(lang)
    editor.setOption('mode', lang);
    editor.save();
}
