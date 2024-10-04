export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(
    "https://api.imgbb.com/1/upload?key=970ff957bd30f1d4b5f7c677645684bd",
    {
      method: "POST",
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error("Image upload failed");
  }

  const data = await response.json();
  return data.data.url;
};
