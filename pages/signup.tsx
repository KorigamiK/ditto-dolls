import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";

import type { FormEvent } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
} from "~/utils/firebaseClient";
import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

type Props = {};

const Login = (props: Props) => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    const handleGoogleLogin = async (e: FormEvent) => {
        e.preventDefault();
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider);
            setPersistence(auth, browserLocalPersistence);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Nav />
            <div className="py-8 mt-20 bg-white-100">
                <div className="bg-white-50 w-1/2 mx-auto flex flex-col items-center p-8 gap-8">
                    <h2 className="text-3xl font-medium">Sign Up</h2>
                    {loading ? (
                        <p>Loading...</p>
                    ) : user ? (
                        <>
                            <p>Welcome {user.displayName}</p>{" "}
                            <button onClick={() => auth.signOut()}>
                                Sign out
                            </button>{" "}
                            <Link href={"/dashboard"}>
                                Continue to Dashboard
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="h-[2px] bg-black/30 w-[65px] -mt-4"></div>
                            {/* <h3 className="text-xl">
                                Not a member yet?{" "}
                                <span className="font-bold">Join here</span>
                            </h3> */}
                            <input
                                type={"text"}
                                placeholder="Email"
                                className="border border-black/30 w-1/2 rounded-sm p-4 text-xl"
                            />
                            <input
                                type={"password"}
                                placeholder="Password"
                                className="border border-black/30 w-1/2 rounded-sm p-4 text-xl -my-4"
                            />
                            <input
                                type={"password"}
                                placeholder="Confirm Password"
                                className="border border-black/30 w-1/2 rounded-sm p-4 text-xl"
                            />
                            <div className="h-[2px] bg-black/10 w-3/5 mt-5"></div>
                            <button className="w-1/2 bg-green-200 text-xl text-white-50 rounded-sm text-center p-3">
                                Sign Up
                            </button>{" "}
                            <button className="w-1/2 bg-[#597FD7] text-xl text-white-50 rounded-sm text-center p-3">
                                Continue with Facebook
                            </button>{" "}
                            <button
                                onClick={handleGoogleLogin}
                                className="w-1/2 bg-white-50 text-xl rounded-sm text-center p-3 border border-black/10 -mt-5"
                            >
                                Continue with Google
                            </button>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
