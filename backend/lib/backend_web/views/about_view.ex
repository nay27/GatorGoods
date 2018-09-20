defmodule BackendWeb.AboutView do
  use BackendWeb, :view

  def render("index.json", %{about: about}) do
    %{data: render_many(about, Backend.AboutView, "about.json")}
  end

  def render("show.json", %{about: about}) do
    %{data: render_one(about, Backend.AboutView, "about.json")}
  end

  def render("about.json", %{about: about}) do
    %{id: about.id}
  end
end
