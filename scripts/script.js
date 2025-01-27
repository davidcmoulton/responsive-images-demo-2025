(function(win) {
  const doc = win.document;

  const constructFilenameReportElement = () => {
    const filenameReportElement = doc.createElement('output');
    filenameReportElement.innerHTML = 'Actual image path loaded: '
    doc.querySelector('#example').appendChild(filenameReportElement);
    return filenameReportElement;
  };

  const showLoadedImageFilename = () => {
    const imageElement = doc.querySelector('img#image');
    constructFilenameReportElement().innerHTML += imageElement.currentSrc;
  }

  win.addEventListener('load', showLoadedImageFilename, false);

}(window));