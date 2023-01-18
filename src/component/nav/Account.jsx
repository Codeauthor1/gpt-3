import Button from "../Button";

function Account() {
  return (
    <div
      style={{
        display: "flex",
        flex: 2,
        justifyContent: "flex-end",
      }}
    >
      <Button text="sign in" />
      <Button className="sign-up" text="sign up" />
    </div>
  );
}

export default Account;
