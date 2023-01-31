import axios from "axios";
import imageCompression from "browser-image-compression";

export const compressImage = (images: any) => {
  const file = images.target.files[0];
  const result = document.getElementById("web-worker-result");
  const progressDom = document.getElementById("web-worker-progress");

  if (!result || !progressDom) return;
  result.innerHTML = (file.size / 1024 / 1024).toFixed(2) + "MB => ";

  const onProgress = (percent: any) => {
    progressDom.innerHTML = `(${percent}%)`;
    if (percent === 100) {
      progressDom.innerHTML = "";
    }
  };
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1000,
    onProgress: onProgress,
  };
  imageCompression(file, options)
    .then((output) => {
      const img = URL.createObjectURL(output);
      result.innerHTML += (output.size / 1024 / 1024).toFixed(2) + "MB<br>";
      result.innerHTML += `
      <a href="${img}" target="_blank">
            <img src="${img}" width="200" alt="">
          </a>`;
      return setSubmitEvent(output);
    })
    .catch(function (error) {
      console.error(error.message);
    });
};

const setSubmitEvent = (file: File) => {
  const form = document.forms.namedItem("fileinfo");
  if (!form) return;
  const formData = new FormData(form);
  const url = "/post/foo/bar/";

  formData.append("image", file, file.name);

  form.addEventListener("submit", (event: SubmitEvent) => {
    // fetch(url, {
    //   method: "POST",
    // }).then((response) => console.log(response));

    axios
      .post(url, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res));
    event.preventDefault();
  });
};
