Java.use("java.net.HttpURLConnection").getURL.implementation = function () {
  const url = this.getURL();
  console.log("HttpURLConnection URL:", url.toString());
  return url;
};
