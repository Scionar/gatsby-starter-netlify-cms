import slugify from 'slugify';

export default title => {
  return `/episode/${slugify(title)}`;
};
