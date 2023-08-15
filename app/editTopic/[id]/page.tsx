import EditTopicForm from "@/component/EditTopicForm";

interface EditTopicProps {
  params: any;
}
const page: React.FC<EditTopicProps> = async ({ params }) => {
  const getTopics = async (id: any) => {
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
  const { id } = params;
  const { topic } = await getTopics(id);
  console.log("---", topic);
  if (topic) {
    const { title, description } = topic;
    return <EditTopicForm id={id} title={title} description={description} />;
  }
};

export default page;
