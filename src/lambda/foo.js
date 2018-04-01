export function handler(event, context, callback) {
  console.log(event)
  callback(null, {
    statusCode: 200,
    body: Object.assign({}, JSON.stringify({msg: "Response from foo.js!"}), {"event": JSON.stringify(event)})
  })
}
