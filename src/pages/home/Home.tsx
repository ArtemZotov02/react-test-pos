import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout.tsx";
import { useTranslation } from "react-i18next";
import Auth from "../../components/auth/Auth";
import { IHome } from "../../types/Home.types.ts";
import { AuthUser } from "../../types/Auth.types.ts";
import Loader from "../../ui/loader/Loader.tsx";
import Profile from "../../components/profile/Profile.tsx";

export default function Home () {
  const [authUser, setAuthUser] = useState<AuthUser | null | undefined>(undefined);
  const [data, setData] = useState<IHome>();
  const { i18n } = useTranslation();

  const onLoginSuccess = (userData: AuthUser) => {
    setAuthUser(userData);
  };

  useEffect(()=> {
    const user = localStorage.getItem('user')
    if(user) {
      setAuthUser(JSON.parse(user)); 
    }
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5001/home?lang=${i18n.language}`)
    .then((res) => res.json())
    .then((data) => setData(data[0]));
  }, [i18n.language]);


  if (authUser === undefined) {
    return <Loader/>;
  }

  return (
    <Layout data={data?.header}>
      {authUser ? (
       <Profile user={authUser.user} setAuthUser={setAuthUser} data={data?.profile}/>
      ) : (
        <Auth onLoginSuccess={onLoginSuccess}/>
      )}
    </Layout>
  );
}
