type User = {
  username: string | null;
  token: string | null;
} | null;

type Dragon = {
  createdAt?: Date | String;
  histories?: Array;
  id?: string;
  name: string;
  type: string;
};

type State = {
  dragonId?: string;
};

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
} | null;

type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
