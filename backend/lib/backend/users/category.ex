defmodule Backend.Users.Category do
  @moduledoc """
  Backend Category
"""
  use Ecto.Schema
  import Ecto.Changeset
  use BackendWeb, :model

  schema "categories" do
    field :name, :string, default: "NONE SELECTED"
    belongs_to :item, Backend.Users.Item
  end

  @required_fields ~w(name)
  @optional_fields ~w()

  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields)
    |> validate_required([:name])
  end
end