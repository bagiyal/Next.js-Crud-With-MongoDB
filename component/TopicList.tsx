import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    // console.log("--- res --",res);
    return res.json();
  } catch (error) {
    console.log("Error Loading Error", error);
  }
};
const delTopics = async (id) => {
  try{
    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "DELETE",
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to delete topics");
    }
    // console.log("--- res --",res);
    return res.json();
  }catch (error) {
   console.log("Error Loading Error", error);
  };
}
export default async function TopicList() {
  const data  = await getTopics();
  console.log("=>+>+>",data);
  return (
    <>
      {data.map((topics:any) => (
        <div
          style={{
            borderWidth: 5,
            borderColor: "black",
            margin: 3,
            justifyContent: "space-between",
            backgroundColor: "white",
            display: "flex",
            padding: 20,
          }}
        >
          <div>
            <h2 style={{ fontWeight: "bolder", fontSize: 20 }}>{topics.title}</h2>
            <div>{topics.description}</div>
          </div>
          <div>
            <RemoveBtn />
            <Link href={`/editTopic/${topics._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
