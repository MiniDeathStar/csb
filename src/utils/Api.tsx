//const apiBaseUrl = import.meta.env.VITE_API_URL;

export const predict = async (text: String, model: String) => {
  return {
    clf: model,
    probability: {
      M: 0.6,
      F: 0.4
    },
    text: text
  };
  const data = {
    text: text,
    clf: model
  };
  const response = await fetch(`${apiBaseUrl}`, {
    method: "POST",
    body: JSON.stringify(data)
  });
  return await response.json();
};
