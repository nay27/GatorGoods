defmodule BackendWeb.CategoriesController do
  use BackendWeb, :controller

    def create_default_categories(conn, %{"mode" => mode}) do
      render conn, "categories.html"
      if mode == "create" do
        # create categories
        Backend.Users.create_category("Books")
        Backend.Users.create_category("Clothing")
        Backend.Users.create_category("Electronics")
        Backend.Users.create_category("Furniture")
        Backend.Users.create_category("Misc.")
      end

      if mode == "delete" do
        #delete all categories
        Backend.Users.delete_category()
      end
    end
  end