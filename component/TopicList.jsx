import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicList(){
    return (
        <div style={{borderWidth:5,borderColor:'black',margin:3,justifyContent:'space-between',backgroundColor:"white",display:'flex',padding:20,}}>
            <div>
                <h2 style={{fontWeight:'bolder',fontSize:20}}>Topic Title</h2>
                <div>Topic Description</div>
            </div>
            <div>
                <RemoveBtn />
                <Link href={"/editTopic123"}>
                <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
    );
}