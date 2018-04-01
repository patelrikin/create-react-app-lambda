export function handler(event, context, callback) {
  console.log('event', event);
  console.log('context', context);
  console.log('cb', callback);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: "Hello, World!"})
  })
}
