"use client";

import env from "@/config/environment";
import TextField from "@/components/textfield";

export default function Home() {
  return (
    <div>
      <h1>{env.APPNAME}</h1>
      <p>SignUp page</p>

      <TextField labelText="Name" placeholderText="Enter your name" />
      <TextField labelText="Email" placeholderText="Enter your email" fieldType="email" />
      <TextField labelText="Password" placeholderText="Enter your password" fieldType="password" />
      <TextField labelText="Password" placeholderText="Enter your password once more" fieldType="password" />

      <button>Sign Up</button>
    </div>
  );
}