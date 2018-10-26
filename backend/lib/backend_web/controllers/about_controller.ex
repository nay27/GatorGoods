defmodule BackendWeb.AboutController do
  use BackendWeb, :controller
  alias Backend.{About} #Repo,

  def index(conn, _) do
   render conn, "index.html"
 end

  def jonas(conn, _) do
    render conn, "jonas.html"
  end

  def eric(conn, _) do
    render conn, "eric.html"
  end

  def mariko(conn, _) do
    render conn, "mariko.html"
  end
  def naylin(conn, _) do
    render conn, "naylin.html"
  end

end
