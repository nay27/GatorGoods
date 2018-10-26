defmodule BackendWeb.PageController do
  use BackendWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def image(conn, %{"id" => id}) do
    item = Repo.get!(Item, id)
    conn
    |> put_resp_content_type(item.image_binary_type, "utf-8")
    |> send_resp(200, item.image_binary)
  end

  def thumbnail(conn, %{"id" => id}) do
    item = Repo.get!(Item, id)
    conn
    |> put_resp_content_type(item.thumbnail_binary_type, "utf-8")
    |> send_resp(200, item.thumbnail_binary)
  end
end
