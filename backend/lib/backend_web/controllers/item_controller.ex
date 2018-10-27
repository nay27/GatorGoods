defmodule BackendWeb.ItemController do
  use BackendWeb, :controller

  alias Backend.Users
  alias Backend.Users.Item

  def all_categories do
     Users.list_categories()
  end

  def category_array do
    Enum.map(all_categories(), fn c -> [key: c.name, value: c.id] end)
  end

  def category_array_with_none do
    [[key: "None", value: ""] | category_array()]
  end
  def index(conn, _params) do
    items = Users.list_items()
    render(conn, "list.html", items: items, categories: all_categories())
  end

  def new(conn, _params) do
    changeset = Users.change_item(%Item{})
    render(conn, "new.html", changeset: changeset, categories: category_array_with_none())
  end

  def create(conn, %{"item" => item_params}) do
    IO.inspect item_params
    item_params = Map.put(item_params, "status", "pending")
    case Users.create_item(item_params) do
      {:ok, item} ->
        if upload = item_params["image"] do
          extension = Path.extname(upload.filename)
          File.cp(upload.path, Path.join(["media", "#{upload.filename}"]))
          itemm = Ecto.Changeset.change item, image: upload.filename
          Backend.Repo.update(itemm)
        end
        conn
        |> put_flash(:info, "Item created successfully.")
        |> redirect(to: item_path(conn, :show, item))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset, categories: category_array_with_none())
    end
  end

  def show(conn, %{"id" => id}) do
    item = Users.get_item!(id)
    render(conn, "show.html", item: item)
  end

  def edit(conn, %{"id" => id}) do
    item = Users.get_item!(id)
    changeset = Users.change_item(item)
    categories = Enum.map(all_categories(), fn c -> [key: c.name, value: c.id] end)
    render(conn, "edit.html", item: item, changeset: changeset, categories: category_array_with_none())
  end

  def update(conn, %{"id" => id, "item" => item_params}) do
    item = Users.get_item!(id)

    case Users.update_item(item, item_params) do
      {:ok, item} ->
        conn
        |> put_flash(:info, "Item updated successfully.")
        |> redirect(to: item_path(conn, :show, item))
      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", item: item, changeset: changeset, categories: category_array_with_none())
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
    render(conn, "list.html", items: Users.search_item(query, category), categories: all_categories())
  end
end
