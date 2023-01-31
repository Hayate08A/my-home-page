import { storage } from "../../firebase";

export const imageUpload = (e: any) => {
  if (e.target.files[0]) {
    const randomId = Math.random().toString(32).substring(2);
    const uploadTask = storage
      .ref(`/images/${randomId}.png`)
      .put(e.target.files[0]);
    uploadTask.on(
      "state_changed",
      (snapShot: any) => {
        console.log(snapShot);
      },
      (err: any) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(`${randomId}.png`)
          .getDownloadURL()
          .then((fireBaseUrl: any) => {
            console.log(fireBaseUrl);
          });
      }
    );
  }
};
