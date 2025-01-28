import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Test Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const test = () => {
  return <div>test</div>;
};

export default test;
