import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{display:'flex', justifyContent:'space-between',alignItems:'center',backgroundColor:'slateblue',padding:8,}}>
      <Link style={{color:'white',fontWeight:'bold'}} href="/">Home</Link>
      <Link className="bg-white p-2" href="/addTopic">Add Topic</Link>
    </nav>
  );
}
