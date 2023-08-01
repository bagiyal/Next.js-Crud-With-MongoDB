export default function EditTopicForm() {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <input
        style={{
          display: "flex",
          borderWidth: 4,
          padding: 5,
          borderColor: "slate-500",
        }}
        type="text"
        placeholder="Topic Title"
      />
      <input
        style={{
          display: "flex",
          borderWidth: 4,
          padding: 5,
          borderColor: "slate-500",
        }}
        type="text"
        placeholder="Topic Description"
      />
      <button style={{ backgroundColor: "green", fontWeight: "bolder" }}>
        Update Topic
      </button>
    </form>
  );
}
