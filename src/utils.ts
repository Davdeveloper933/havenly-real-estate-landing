export const importMultipleImages = (path) => {
  const imagesList = Object.values(path).map((image) => image.default);
  return imagesList;
};

// // Import all images with .png, .jpg, .jpeg, or .svg extensions from the assets/images folder
// const clientLogos = import.meta.glob('@/assets/img/clients/*.{png,jpg,jpeg,svg}', { eager: true });
// // Format the imported images into a simple array of URLs
// const clientLogosList = Object.values(clientLogos).map((logo) => logo.default);
