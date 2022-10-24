import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function MonsterDetail() {


let params = useParams()


    return(

      
        <div>


            #{params.id}MonsterDetail
            <p>#{params.description}</p>

           <Link to = "/"><button type="button">返回首頁</button></Link>
        </div>

    )
}