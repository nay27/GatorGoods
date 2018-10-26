defmodule Backend.Repo.Migrations.CreateItem do
  use Ecto.Migration

  def change do
    create table(:categories) do
      add :name, :string, default: "NONE SELECTED"
    end
    create table(:items) do
      add :title, :string
      add :description, :string
      add :price, :integer
      add :status, :string
      add :category_id, references("categories")

      timestamps()
    end
  end
end
