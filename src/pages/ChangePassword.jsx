import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const ChangePassword = () => {
  const { changePassword } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();

    const currentPassword = event.target.currentPassword.value;
    const newPassword = event.target.password2.value;
    const repeatPassword = event.target.repeatPassword.value;

    const changePasswordCredential = {
      currentPassword,
      newPassword,
    };

    changePassword(changePasswordCredential);
  };
  return (
    <div className="container mx-auto min-h-screen mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-4 mx-auto"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="currentPassword" value="Current password" />
          </div>
          <TextInput id="currentPassword" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="New password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeatPassword" value="Repeat password" />
          </div>
          <TextInput id="repeatPassword" type="password" required shadow />
        </div>
        <Button color="failure" type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
