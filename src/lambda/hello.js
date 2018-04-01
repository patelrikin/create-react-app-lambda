export function handler(event, context, callback) {
  console.log(event)
  callback(null, {
    statusCode: 200,
    body: Object.assign({}, JSON.stringify({msg: "Hello, World!"}), {"event": JSON.stringify(event)})
  })
}
