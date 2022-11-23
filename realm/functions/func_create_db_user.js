exports = async function(authEvent) {
  try {
    const user = authEvent.user
    const collection = context.services.get("mongodb-atlas").db("pilot").collection("users");
    const doc = await collection.insertOne({ uid: user.id, name: "" });
    return doc
  } catch (err) {
    console.log(err)
    return err
  }
};