(function(win) {
  const doc = win.document;

  const constructFilenameReportElement = () => {
    const filenameReportElement = doc.createElement('output');
    doc.querySelector('#example').appendChild(filenameReportElement);
    return filenameReportElement;
  };

  const reportImageFilename = (reporter, imageElement) => {
    const imageFilename = imageElement.currentSrc.replace(/http:\/\/[^/]+/, '');
    console.log('imageFilename', imageFilename);
    reporter.innerHTML = 'Actual image path loaded: ' + imageFilename;
  }

  win.addEventListener('load', () => {
    const filenameReporter = constructFilenameReportElement();
    const imageElement = doc.querySelector('img#image');
    reportImageFilename(filenameReporter, imageElement);

    win.addEventListener('resize', () => {
      reportImageFilename(filenameReporter, imageElement);
    }, false);

  }, false);

}(window));