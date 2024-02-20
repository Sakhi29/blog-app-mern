import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-semibold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 rounded-lg text-black">
              ReadIt
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a blog project. You can signup with your email and password
            or login with Google.
          </p>
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput
                color="failure"
                type="text"
                placeholder="Username"
                id="username"
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                color="failure"
                type="text"
                placeholder="name@gmail.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                color="failure"
                type="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <Button
              gradientDuoTone="pinkToOrange"
              type="Submit"
              className="text-black font-semibold"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account? </span>
            <Link to="/signin" className="text-red-400">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
