import { gql, useMutation } from "@apollo/client";

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

export default function MutateData({ refetch }) {
  const [createUser, { data, loading, error }] =
    useMutation(CREATE_USER_MUTATION);

  const handleForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    createUser({
      variables: {
        input: {
          name: formData.get("name"),
          username: formData.get("username"),
          age: parseInt(formData.get("age")),
          nationality: formData.get("nationality").toUpperCase(),
        },
      },
    });

    refetch();
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="input-group">
          <input type="text" name="name" placeholder="John Doe" />
          <input type="text" name="username" placeholder="john.doe" />
          <input type="number" name="age" placeholder="23" />
          <input type="text" name="nationality" placeholder="AMERICAN" />
        </div>
        <button type="submit">Create User</button>
      </form>
    </>
  );
}
