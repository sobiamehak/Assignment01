import Link from "next/link";

export default function Main(){
  return(
    <div className="main">
      <ul>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/about">About</Link></li>
         <li><Link href="/contact">Contact Us</Link></li>
         <li><Link href="/services">Services</Link></li>
         
        

      </ul>

    </div>
  );
}