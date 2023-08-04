"use client"

import { useState } from "react";

export default function AddTopic() {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const handleChange = () => {
    console.log(title);
    console.log(description);
    if(!title || !description) {
        alert("Please select a title");
    }
  };
    return (
    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleChange}>
      <input
        style={{
          display: "flex",
          borderWidth: 4,
          padding: 5,
          borderColor: "slate-500",
        }}
        type="text"
        placeholder="Topic Title"
        onChange={(value:any) => {
            console.log(value);
            setTitle(value.target.value);
        }}
        value={title}
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
        onChange={setDescription}
        value={description}
      />
      <button type="submit" style={{ backgroundColor: "green", fontWeight: "bolder" }}>
        Topic
      </button>
    </form>
  );
}
