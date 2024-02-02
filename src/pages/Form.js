import { Link } from "react-router-dom"

const Form = () =>{
    return(
        <div className="flex">
           <h1>แบบฟอร์มข้อมูลรายวิชา</h1>
           <div className="mt-60 ml-60">
           <Link to='/edit' className='btn btn-outline btn-info grid'>บวก</Link>
           </div>
        </div >

           
        
    )
}
export default Form