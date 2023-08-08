"use client"
import { useRouter } from "next/navigation";
import {HiOutlineTrash} from "react-icons/hi";

interface RemoveBtnProps{
    id:any;
}

const RemoveBtn: React.FC<RemoveBtnProps> = ({ id }) => {
    const router = useRouter();
    const delTopics = async () => {
        const confimed = confirm("Are you sure you want to remove");
        try{
            if(confimed){
                await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                    method: "DELETE",
                });
            }
            router.refresh();
        }catch (error) {
         console.log("Error Loading Error", error);
        };
      }
    return (
        <button style={{ color: 'red' }} onClick={delTopics}>
            <HiOutlineTrash size={24} />
        </button>
    );
}

export default RemoveBtn;