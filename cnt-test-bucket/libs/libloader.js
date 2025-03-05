class LibLoader {
  baseUri = "";

  constructor(baseUri) {
    this.baseUri = baseUri;
  }

  /**
   * JavaScriptファイルを読み込むための関数
   * @param {string} uri JavaScriptを読み込む先のUri
   * @returns
   */
  load(uri) {
    let returnedObject = null;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${this.baseUri}${uri}`, false); // 同期リクエスト

    let error = "";
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        returnedObject = eval(xhr.responseText);
      } else {
        console.error("Error fetching and executing child.js:");
        error = xhr.statusText;
      }
    };
    xhr.onerror = function () {
      error = xhr.statusText;
    };
    xhr.send();

    if (error) {
      throw error;
    }

    return returnedObject;
  }
}

({
  createLibLoader(path) {
    return new LibLoader(path);
  },
});
