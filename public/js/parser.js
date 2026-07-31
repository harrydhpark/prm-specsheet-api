window.ParserModule = {
  async fetchSampleData() {
    const res = await fetch('/api/sample');
    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    return json.data;
  },

  async uploadAndParseFiles(pptFile, videoFiles) {
    const formData = new FormData();
    if (pptFile) {
      formData.append('pptFile', pptFile);
    }
    if (videoFiles && videoFiles.length > 0) {
      for (let i = 0; i < videoFiles.length; i++) {
        formData.append('videoFiles', videoFiles[i]);
      }
    }

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    return json.data;
  }
};
