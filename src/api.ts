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
