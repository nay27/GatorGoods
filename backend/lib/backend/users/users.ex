defmodule Backend.Users do
  @moduledoc """
  The Users context.
  """

  import Ecto.Query, warn: false
  alias Backend.Repo

  alias Backend.Users.Item
  alias Backend.Users.Category

  @doc """
  Returns the list of items.

  ## Examples

      iex> list_items()
      [%Item{}, ...]

  """
  def list_items do
    Repo.preload(Repo.all(Item), :category)
  end

  def list_categories do
    Repo.all(Category)
  end

  @doc """
  Gets a single item.

  Raises `Ecto.NoResultsError` if the Item does not exist.

  ## Examples

      iex> get_item!(123)
      %Item{}

      iex> get_item!(456)
      ** (Ecto.NoResultsError)

  """
  def get_item!(id) do
    Repo.preload(Repo.get!(Item, id), :category)
  end 

  @doc """
  Creates a item.

  ## Examples

      iex> create_item(%{field: value})
      {:ok, %Item{}}

      iex> create_item(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_item(attrs \\ %{}) do
    %Item{}
    |> Item.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a item.

  ## Examples

      iex> update_item(item, %{field: new_value})
      {:ok, %Item{}}

      iex> update_item(item, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_item(%Item{} = item, attrs) do
    item
    |> Item.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Item.

  ## Examples

      iex> delete_item(item)
      {:ok, %Item{}}

      iex> delete_item(item)
      {:error, %Ecto.Changeset{}}

  """
  def delete_item(%Item{} = item) do
    Repo.delete(item)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking item changes.

  ## Examples

      iex> change_item(item)
      %Ecto.Changeset{source: %Item{}}

  """
  def change_item(%Item{} = item) do
    Item.changeset(item, %{})
  end

  def search_item(term, category) do
    processed = term |> String.replace("%", " ")
    query = if category do
      category = String.to_integer(category)
      Item
      |> where([i], i.category_id == ^category and (ilike(i.title, ^"%#{processed}%") or ilike(i.description, ^"%#{processed}%")))
    else
      Item
      |> where([i], ilike(i.title, ^"%#{processed}%") or ilike(i.description, ^"%#{processed}%"))
    end
    Repo.all(query)
  end
end
