type User = {
  username: string;
  token: string;
} | null;

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
} | null;

type Dragon = {
  createdAt: Date;
  histories: Array;
  id: string;
  name: string;
  type: string;
};
