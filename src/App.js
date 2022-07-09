import "./App.css";
import React, { useEffect, useContext } from "react";
import AuthContext from "./utils/AuthContext";
import supabase from "./config/supabase";
import Routes from "./Routes";

function App() {
  const { authData, setAuthData, setAuthLoading } = useContext(AuthContext);

  const parseProfile = (profileData) => {
    const { id, avatar_url, name, telegram, phone } = profileData;
    return {
      logged_in: true,
      id,
      name,
      telegram,
      phone,
      avatar_url: avatar_url
        ? supabase.storage.from("avatars").getPublicUrl(avatar_url).publicURL
        : "/images/avatar_default.png",
    };
  };
  // Initialise authData and setup listeners, only done once at the start.
  useEffect(() => {
    const getAccountData = async (user_id) => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user_id)
          .single();
        if (error) throw error;
        return data;
      } catch (error) {
        alert(error.message);
      }
    };

    // Fetch initial user state
    if (supabase.auth.user()) {
      (async () => {
        setAuthLoading(true);
        const accountData = await getAccountData(supabase.auth.user().id);
        setAuthData(parseProfile(accountData));
        setAuthLoading(false);
      })();
    }

    const parseSession = async (session) => {
      if (!session)
        return {
          logged_in: false,
          id: null,
          name: "Guest",
          telegram: null,
          phone: null,
          avatar_url: "/images/avatar_default.png",
        };

      const { user } = session;

      return parseProfile(await getAccountData(user?.id));
    };

    supabase.auth.onAuthStateChange(async (_, session) => {
      setAuthLoading(true);
      setAuthData(await parseSession(session));
      setAuthLoading(false);
    });
  }, [setAuthData, setAuthLoading]);

  // Also set up listener for profile changes
  useEffect(() => {
    const uid = authData.id;
    if (!uid) return;
    const profileSub = supabase
      .from(`profiles:id=eq.${uid}`)
      .on("UPDATE", (payload) => {
        setAuthLoading(true);
        setAuthData(parseProfile(payload.new));
        setAuthLoading(false);
      })
      .subscribe();
    return () => supabase.removeSubscription(profileSub);
  }, [authData, setAuthData, setAuthLoading]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
