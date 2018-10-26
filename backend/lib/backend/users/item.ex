defmodule Backend.Users.Item do
  use Ecto.Schema
  import Ecto.Changeset


  schema "items" do
    field :description, :string
    field :price, :integer
    field :status, :string
    field :title, :string
    field :image, :string
    has_many :categories, Backend.Users.Category

    timestamps()
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:title, :description, :price, :status, :categories])
    |> validate_required([:title, :description, :price, :status, :categories])
    |> cast_assoc(:categories)
  end
end
