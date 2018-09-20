defmodule BackendWeb.AboutController do
  use BackendWeb, :controller
  alias Backend.{About} #Repo,

  def index(conn, _) do
   response = %{
     ABOUT: "This is the about page."
   }

   json(conn, response)
 end
end
