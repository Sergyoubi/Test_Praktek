import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = {};

const AuthCallbackPage = async (props: Props) => {
  // auth check
  const auth = await onAuthenticateUser();

  if (auth.status === 200 || auth.status === 201) {
    return redirect(`/articles}`);
  }
  if (auth.status === 400 || auth.status === 403 || auth.status === 500) {
    return redirect("/auth/sign-in");
  }
};

export default AuthCallbackPage;
