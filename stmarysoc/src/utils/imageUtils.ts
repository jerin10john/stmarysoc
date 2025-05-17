/**
 * Image utility functions for optimizing image loading and presentation
 */

/**
 * Generates a responsive image srcSet string for different viewport sizes
 * @param basePath Base path to the image
 * @param sizes Array of sizes to generate sources for
 * @param extension File extension (default: 'jpg')
 * @returns A string usable as srcSet attribute
 */
export const generateSrcSet = (
  basePath: string,
  sizes: number[] = [640, 768, 1024, 1280, 1536],
  extension: string = 'jpg'
): string => {
  // Remove extension from basePath if present
  const baseWithoutExtension = basePath.replace(new RegExp(`\\.${extension}$`), '');
  
  return sizes
    .map(size => `${baseWithoutExtension}-${size}.${extension} ${size}w`)
    .join(', ');
};

/**
 * Creates appropriate sizes attribute for responsive images
 * @param sizeConfig Configuration for different breakpoints
 * @returns A string usable as sizes attribute
 */
export const generateSizeAttribute = (
  sizeConfig: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    default: string;
  }
): string => {
  const { sm, md, lg, xl, default: defaultSize } = sizeConfig;
  
  const sizesArray = [];
  if (sm) sizesArray.push(`(max-width: 640px) ${sm}`);
  if (md) sizesArray.push(`(max-width: 768px) ${md}`);
  if (lg) sizesArray.push(`(max-width: 1024px) ${lg}`);
  if (xl) sizesArray.push(`(max-width: 1280px) ${xl}`);
  sizesArray.push(defaultSize);
  
  return sizesArray.join(', ');
};

/**
 * Creates an image URL with the correct domain based on environment
 * @param path The image path relative to public directory
 * @returns Complete URL to the image
 */
export const getImageUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, we might have a CDN URL
  const baseUrl = '';
    
  return `${baseUrl}/${cleanPath}`;
};

/**
 * Handles image loading errors by providing a fallback
 * @param event Error event from img element
 * @param fallbackSrc Fallback image source
 */
export const handleImageError = (
  event: Event, 
  fallbackSrc: string = '/images/placeholder.jpg'
): void => {
  const imgElement = event.target as HTMLImageElement;
  
  // Don't enter an infinite loop if fallback also fails
  if (imgElement.src !== fallbackSrc) {
    imgElement.src = fallbackSrc;
    imgElement.onerror = null; // Prevent infinite loop
  }
};

/**
 * Preloads important images to improve perceived loading speed
 * @param imageUrls Array of image URLs to preload
 */
export const preloadImages = (imageUrls: string[]): void => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};