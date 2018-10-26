defmodule BackendWeb.ItemsController do
  use BackendWeb, :controller

  def index(conn, _params) do
    render conn, "list.html", items: fake_items()
  end

  def search(conn, %{"query" => query} = _params) do
      render conn, "list.html", items: fake_items() |> Enum.filter(fn item -> item.title |> String.contains?(query) end)
  end

  def fake_items do
      cool = %{title: "A cool item", price: 1200, image: "test.png", description: "Wow this item is soooooooooooo cool I just can't beleive how cool it is. Stop judging my fake item description please. I'm just hoping this is at least 2 lines. Yay frontend ;)"}
      lame = %{title: "A lame item", price: 1500, image: "", description: "meh"}
      items = [cool, lame]
  end

  
end