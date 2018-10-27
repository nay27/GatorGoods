defmodule Backend.Users.Item do
  use Ecto.Schema
  import Ecto.Changeset


  schema "items" do
    field :description, :string
    field :price, :integer
    belongs_to :category, Backend.Users.Category
    field :status, :string, default: "pending"
    field :title, :string
    field :image, :string

    timestamps()
  end

  @doc false
  def changeset(item, attrs) do
    item
    |> cast(attrs, [:title, :description, :price, :status, :category_id])
    |> validate_required([:title, :description, :price, :status, :category_id])
  end
end
