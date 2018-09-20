defmodule BackendWeb.AboutController do
  use BackendWeb, :controller
  alias Backend.{About} #Repo,

  def index(conn, _) do
   response = %{
     ABOUT: "This is the about page."
   }

   json(conn, response)
 end

  def jonas(conn, _) do
  response = %{
  ABOUT: "This is the Jonas about page."
  }

  json(conn, response)
  end
  def eric(conn, _) do
  response = %{
    ABOUT: "This is the Eric about page."
    }

    json(conn, response)
  end
  def mariko(conn, _) do
  response = %{
    ABOUT: "This is the Mariko about page."
    }

    json(conn, response)
  end
  def naylin(conn, _) do
  response = %{
    ABOUT: "This is the Naylin about page."
    }

    json(conn, response)
  end

end
