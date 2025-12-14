import { Image as ThemeUIImage } from 'theme-ui';

const Image = ({ src, ...props }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const fullSrc = src?.startsWith('/') ? `${basePath}${src}` : src;
  
  return <ThemeUIImage src={fullSrc} {...props} />;
};

export default Image;