const BASE_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

export async function getDragons() {
  try {
    const response = await fetch(BASE_URL);
    return await response.json();
  } catch (error) {
    console.error(error);
  }

  // const response = await fetch(BASE_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify()
  // });
}

export async function createDragon(data: Dragon) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function updateDragon(data: Dragon, id: string) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getDragonById(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteDragon(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
