"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleChange = async (e:any) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please enter both title and description.");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data); // Optional: Log the response data
        router.push("/");
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to create a new topic");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while creating the topic. Please try again.");
    }
  };
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleChange}
    >
      <input
        style={{
          display: "flex",
          borderWidth: 4,
          padding: 5,
          borderColor: "slate-500",
        }}
        type="text"
        placeholder="Topic Title"
        onChange={(value: any) => {
          console.log(value.target.value);
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
        onChange={(value: any) => {
          console.log(value.target.value);
          setDescription(value.target.value);
        }}
        value={description}
      />
      <button
        type="submit"
        style={{ backgroundColor: "green", fontWeight: "bolder" }}
      >
        Save
      </button>
    </form>
  );
}
