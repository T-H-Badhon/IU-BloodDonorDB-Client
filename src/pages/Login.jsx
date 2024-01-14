import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email1.value;
    const password = event.target.password1.value;

    console.log(email, password);

    const loginCredential = {
      email,
      password,
    };
    logIn(loginCredential);
  };

  return (
    <div className="container max-w-md mx-auto h-3/4 md:my-44">
      <h1 className="text-center font-bold text-red-600 text-xl mb-10">
        LOGIN
      </h1>
      <div>
        <form onSubmit={handleSubmit} className="flex  mx-auto flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <Button color="failure" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
