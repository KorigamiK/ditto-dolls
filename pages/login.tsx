import Nav from "../components/Nav"

import type { FormEvent } from "react"

const login = () => {

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    }
}


return (
    <>
        <Nav />

        <main className="w-full h-[90vh] flex justify-center items-center ">
            <div className="">
                <div className="row">
                    <div className="col-md-6">
                        <div className="login-form">
                            <h2>Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="login-form">
                            <h2>Register</h2>
                            <form>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    </>
)
}

export default login