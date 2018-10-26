defmodule BackendWeb.ItemController do
  use BackendWeb, :controller

  alias Backend.Users
  alias Backend.Users.Item

  def index(conn, _params) do
    items = Users.list_items()
    # TODO replace with database categories
    all_categories = [%{name: "Books", id: 1}, %{name: "Furniture", id: 2}, %{name: "Food", id: 3}, %{name: "Electronics", id: 3}]
    render(conn, "list.html", items: items, categories: all_categories)
  end

  def new(conn, _params) do
    changeset = Users.change_item(%Item{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"item" => item_params}) do
    IO.inspect item_params
    item_params = Map.put(item_params, "status", "pending")
    case Users.create_item(item_params) do
      {:ok, item} ->
        conn
        |> put_flash(:info, "Item created successfully.")
        |> redirect(to: item_path(conn, :show, item))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    item = Users.get_item!(id)
    render(conn, "show.html", item: item)
  end

  def edit(conn, %{"id" => id}) do
    item = Users.get_item!(id)
    changeset = Users.change_item(item)
    render(conn, "edit.html", item: item, changeset: changeset)
  end

  def update(conn, %{"id" => id, "item" => item_params}) do
    item = Users.get_item!(id)

    case Users.update_item(item, item_params) do
      {:ok, item} ->
        conn
        |> put_flash(:info, "Item updated successfully.")
        |> redirect(to: item_path(conn, :show, item))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", item: item, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    item = Users.get_item!(id)
    {:ok, _item} = Users.delete_item(item)

    conn
    |> put_flash(:info, "Item deleted successfully.")
    |> redirect(to: item_path(conn, :index))
  end

  def search(conn, %{"query" => query} = params) do
    category = Map.get(params, "category")
    query = case query do
      nil -> ""
      query -> query
    end
    # TODO replace with database categories
    all_categories = [%{name: "Books", id: 1}, %{name: "Furniture", id: 2}, %{name: "Food", id: 3}, %{name: "Electronics", id: 3}]
    render(conn, "list.html", items: Users.search_item(query, category), categories: all_categories)
  end
end
