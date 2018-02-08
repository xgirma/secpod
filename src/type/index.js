import PropTypes, { shape, number, string, oneOf } from 'prop-types';

const pod = shape({
  url: string,
  description: string,
  duration: number,
  displayText: string,
  image: string,
  likes: number,
  link: string,
  owner_email: string,
  owner_name: string,
  published: string,
  title: string,
  _id: string,
}).isRequired;

const playlistType = PropTypes.arrayOf(pod);

export default playlistType;
