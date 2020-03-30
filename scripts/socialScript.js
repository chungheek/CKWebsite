/* Used https://www.w3schools.com/jsref/event_onclick.asp and
    https://www.geeksforgeeks.org/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript/
    to implement download button function to download ipsum lorem data filled text in file.txt.
    PS: implemented scroll bar and download button in case 'object' item in resumeCv.html would not
    get me points for these areas.
*/

function downloadButton() {
    document.getElementById('download').addEventListener('click', downloadButton);
    const scrollBoxData = document.getElementById('scrollBox');
    let data = scrollBoxData.textContent;
    var el = document.createElement('a');
    el.setAttribute('href', 'data:text/plain;charset=utf-8, '
        + encodeURIComponent(data));
    el.setAttribute('download', 'file.txt');
    el.click();
}