import slugify from 'slugify';

const episodePath = title => {
  if (!title) throw new Error();
  return `/episode/${slugify(title, { remove: /[?*+~.()'"!:@]/g })}`;
};

export default episodePath;
