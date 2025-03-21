import style from "./style.module.scss";
export default function Loader() {
  return (
    <div className={style.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
