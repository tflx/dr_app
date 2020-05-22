function fetchIt(path) {
  console.log('fetch');
  return fetch(path, {
    headers: {
      'x-dr-mu-subscriber-id': 'jsules/7sdk53(sr#sknms)!dgflllLKmdn4'
    }
  })
  .then(result => result.json());
}

export default fetchIt