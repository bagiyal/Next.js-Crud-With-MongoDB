import EditTopicForm from "@/component/EditTopicForm";

interface EditTopicProps {
  params: any;
}
const page: React.FC<EditTopicProps> = async ({ params }) => {
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
  const { id } = params;
  const { topics } = await getTopics(id);
  // console.log("---",{topics});
  const { title, description } = topics;
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default page;
