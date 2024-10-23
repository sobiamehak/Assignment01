import Link from "next/link"

function Services(){
    return(
      <div> 
        <h1 className="service"><Link href='/services/about-course'>Nested page 1</Link></h1>
        <h1 className="service2"><Link href='/services/nested2'>Nested page 2</Link></h1>
  
      
      </div>
    )
  }
  export default Services
  