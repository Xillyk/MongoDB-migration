export const up = async (db) => {
  await db.collection("suppliers").updateMany({}, { $set: { number: "1" } });
};

export const down = async (db) => {
  await db.collection("suppliers").updateMany({}, { $unset: { number: "" } });
};
