defmodule Backend.Users do
  use Ecto.Schema
  import Ecto.Changeset
  @moduledoc """
  The Users context.
  """

  import Ecto.Query, warn: false
  alias Backend.Repo

  alias Backend.Users.Item

  schema "users" do
  field :firstname, :string, size: 50
  field :lastname, :string, size: 50
  field :facultyMember, :boolean, default: false
  field :moderator, :boolean, default: false
  field :blacklisted, :boolean, default: false
  has_many :items, Item
  timestamps()
  end

  def changeset(users, attrs) do
    users
    |> cast(attrs, [:firstname, :lastname, :facultyMember, :moderator, :blacklisted])
    |> validate_required([:firstname, :lastname, :facultyMember, :moderator, :blacklisted])
  end

  @doc """
  Returns the list of items.

  ## Examples

      iex> list_items()
      [%Item{}, ...]

  """
  def list_items do
    Repo.all(Item)
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
  def get_item!(id), do: Repo.get!(Item, id)

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
end
