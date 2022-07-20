const BASE_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

enum UserAuthParams {
  Username = "admin",
  Password = "1234",
  Token = "Token",
}

enum Status {
  "Code200" = 200,
  "Code201" = 201,
  "Code401" = 401,
}

enum Messages {
  LoginSuccess = "Login efetuado com sucesso!",
  LoginError = "Usuário ou senha inválidos",
  CreateSuccess = "Dragão cadastrado com sucesso!",
  CreateError = "Erro ao cadastrar dragão!",
  UpdateSuccess = "Dragão editado com sucesso!",
  UpdateError = "Erro ao editar dragão!",
  GetAllSuccess = "Dragões encontrados com sucesso!",
  GetAllError = "Erro ao buscar dragões!",
  GetByIdSuccess = "Dragão encontrado com sucesso!",
  GetByIdError = "Erro ao buscar informações do dragão!",
  DeleteSuccess = "Dragão excluido com sucesso!",
  DeleteError = "Erro ao excluir dragão!",
}

export const login = async (username: string, password: string) => {
  try {
    const response = await new Promise<{ data?: User; status: number }>(
      (resolve) =>
        setTimeout(() => {
          if (
            username === UserAuthParams.Username &&
            password === UserAuthParams.Password
          ) {
            resolve({
              data: { username, token: UserAuthParams.Token },
              status: Status.Code201,
            });
          } else {
            resolve({ status: Status.Code401 });
          }
        }, 1000)
    );
    if (response.status === Status.Code201) {
      return { data: response.data, message: Messages.LoginSuccess };
    } else {
      throw new Error(Messages.LoginError);
    }
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
};

export async function getDragons() {
  try {
    const response = await fetch(BASE_URL);

    if (response.status === Status.Code200) {
      const data = await response.json();
      return { data, message: Messages.GetAllSuccess };
    } else {
      throw new Error(Messages.GetAllError);
    }
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
}

export async function createDragon(data: Dragon) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === Status.Code201) {
      const data = await response.json();
      return { data, message: Messages.CreateSuccess };
    } else {
      throw new Error(Messages.CreateError);
    }
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
}

export async function updateDragon(data: Dragon, id: string) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === Status.Code200) {
      const data = await response.json();
      return { data, message: Messages.UpdateSuccess };
    } else {
      throw new Error(Messages.UpdateError);
    }
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
}

export async function getDragonById(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (response.status === Status.Code200) {
      const data = await response.json();
      return { data, message: Messages.GetByIdSuccess };
    } else {
      throw new Error(Messages.GetByIdError);
    }
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
}

export async function deleteDragon(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === Status.Code200) {
      const data = await response.json();
      return { data, message: Messages.DeleteSuccess };
    } else {
      throw new Error(Messages.DeleteError);
    }
  } catch (err) {
    const error = err as Error;
    return { error: error.message };
  }
}
