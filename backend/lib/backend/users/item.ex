defmodule Backend.Users.Item do
  use Ecto.Schema
  import Ecto.Changeset


  schema "items" do
    field :description, :string
    field :onlyVisibleToFaculty, :boolean, default: false
    field :price, :integer
    field :status, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:title, :description, :price, :status, :onlyVisibleToFaculty])
    |> validate_required([:title, :description, :price, :status, :onlyVisibleToFaculty])
  end
end
