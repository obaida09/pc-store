export default function log({ next, to }) {
  console.log('name');

  return next();
}
