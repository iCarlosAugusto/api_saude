import { getDownloadURL, getStorage } from "firebase-admin/storage";

const saveToBucket = async (file: Express.Multer.File) => {
  const fileUpload = getStorage().bucket().file(`images/img-${Date.now().toString()}.jpg`);
  await fileUpload.save(file.buffer);
  const url = await getDownloadURL(fileUpload);
  return url;
}
export { saveToBucket }
