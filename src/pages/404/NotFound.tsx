import { useNavigate } from "react-router-dom"
import style from './style.module.scss'

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={style.notFound}>
      <h2>404</h2>
      <button onClick={()=> navigate("/",  { replace: true })}>GO to the main page</button>
    </div>
  )
}
