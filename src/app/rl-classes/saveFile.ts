export function saveFile(data: any) {
    const blob = new Blob([JSON.stringify(data, null ,'\t')], { type: 'text/x-json' });
    const url= window.URL.createObjectURL(blob);
    window.open(url, '_blank', '');
}

export function saveData(data, fileName) {
    const a = document.createElement("a");
    document.body.appendChild(a);
    console.log(a)
    // @ts-ignore
    a.style = "display: none";
    const  json = JSON.stringify(data, null, '\t') ,
        blob = new Blob([json], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.target = '_blank';
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    // a.remove()
};

