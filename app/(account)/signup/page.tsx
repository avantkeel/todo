import env from "@/config/environment";

export default function Home() {
    return (
        <div>
            <h1>{env.APPNAME}</h1>
            <p>SignUp page</p>
        </div>
    );
}
