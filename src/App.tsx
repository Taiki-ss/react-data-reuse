import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const App: React.FC = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.map((user:any) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );

  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/users" element={<Users />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
};

export default App;
