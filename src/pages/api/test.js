import micro from 'micro';

export default micro((req, res) => {
  console.log('running!!!!')
  return "hello world"
});
