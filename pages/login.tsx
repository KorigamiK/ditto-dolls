import React from "react";
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
    console.log(user);
    return (
        <>
            <Nav />
            <div className="py-8 mt-20 bg-white-100">
                <div className="bg-white-50 w-1/2 mx-auto flex flex-col items-center p-8 gap-8">
                    <h2 className="text-3xl font-medium">Login</h2>
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
                            <h3 className="text-xl">
                                Not a member yet?{" "}
                                <span className="font-bold">Join here</span>
                            </h3>
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
                            <div className="h-[2px] bg-black/10 w-3/5 mt-5"></div>
                            <div className="flex gap-5 items-center text-lg">
                                Keep me logged in on this device
                                <label
                                    htmlFor="toggleTwo"
                                    className="flex cursor-pointer select-none items-center"
                                >
                                    <div className="relative">
                                        <input type="checkbox" id="toggleTwo" />
                                        {/* <div className="block h-8 w-14 rounded-full bg-[#1d376c]"></div>
                                <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div> */}
                                    </div>
                                </label>
                            </div>
                            <button className="w-1/2 bg-green-200 text-xl text-white-50 rounded-sm text-center p-3">
                                Login
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
                            <div className="h-[2px] bg-black/10 w-3/5"></div>
                            <Link href={"/"}>Forgot Password?</Link>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
