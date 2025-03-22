import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import style from "./style.module.scss";
import { IUser, ProfileProps } from "../../types/Profile.types";


export default function Profile({ user, setAuthUser, data }:ProfileProps) {
  const [userInfo, setUserInfo] = useState<IUser>();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    setAuthUser(null);
  };

  useEffect(() => {
    // fetch(`http://localhost:5001/users?username=${user}`)
    fetch(`https://my-json-server.typicode.com/ArtemZotov02/db/users?username=${user}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data[0]))
      .catch((e) => console.log(e));
  }, [user]);


  return (
    <>
      {user && (
        <div className={style.profile}>
          <div className={style.profile_info}>
            <div className={style.profile_info__avatar}>{userInfo?.username.slice(0,1).toUpperCase()}</div>
            <div className={style.profile_info__name}>
              <h3>{userInfo?.username}</h3>
              <p>{userInfo?.email}</p>
            </div>
          </div>
          <button onClick={()=>handleLogout()} className={style.profile_logout}>{data?.logout}</button>
        </div>
      )}
    </>
  );
}
