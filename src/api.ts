const BASE_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

enum Messages {
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

export async function getDragons() {
  try {
    const response = await fetch(BASE_URL);

    if (response.status === 200) {
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

    if (response.status === 201) {
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

    if (response.status === 200) {
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

    if (response.status === 200) {
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

    if (response.status === 200) {
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
