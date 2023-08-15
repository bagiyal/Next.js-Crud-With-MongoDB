"use client";
interface EditTopicFormProps{
  id: any;
  title: string;
  description: string;
}

const EditTopicForm:React.FC<EditTopicFormProps> = ({id,title,description}) =>{
  console.log("sfsdf",description);
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

export default EditTopicForm;
