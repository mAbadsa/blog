import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import ArticleForm from "../components/ArticleForm";
import { useUser } from "@auth0/nextjs-auth0";

const New: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user === undefined) {
    } else if (!user) {
      router.push("api/auth/login");
    } else {
      setIsLoading(false);
    }
  }, [router, user]);

  return <>{!isLoading && <ArticleForm />}</>;
};

export default New;
