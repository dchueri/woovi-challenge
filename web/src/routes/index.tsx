import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import MoviesForm from "../components/MovieForm";
import MoviesList from "../components/MoviesList";
import { ProtectedLayout } from "../components/ProtectedLayout";

export const IndexRoutes = (props: { moviesList: any }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <ProtectedLayout>
              <>
               <MoviesForm/>
                <MoviesList moviesList={props.moviesList} />
              </>
            </ProtectedLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};