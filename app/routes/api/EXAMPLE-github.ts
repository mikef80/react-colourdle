export const loader = async () => {
  const response = await fetch("https://api.github.com/users/yourusername/repos");
  const repos = await response.json();
  return Response.json(repos);
};
